import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react'
import { words } from './words'
import { deleteWordImage, getAllWordImages, saveWordImage } from './imageStore'

type Status = 'known' | 'review'
type Progress = Record<string, Status>

const storageKey = 'picture-words-progress-v1'

function loadProgress(): Progress {
  try { return JSON.parse(localStorage.getItem(storageKey) ?? '{}') }
  catch { return {} }
}

export default function App() {
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState<Progress>(loadProgress)
  const [speaking, setSpeaking] = useState(false)
  const [managerOpen, setManagerOpen] = useState(false)
  const [customImages, setCustomImages] = useState<Record<string, string>>({})
  const [notice, setNotice] = useState('')
  const firstWord = useRef(true)
  const current = words[index]
  const learned = useMemo(() => Object.values(progress).filter((value) => value === 'known').length, [progress])

  useEffect(() => localStorage.setItem(storageKey, JSON.stringify(progress)), [progress])
  useEffect(() => () => speechSynthesis.cancel(), [])
  useEffect(() => {
    let active = true
    getAllWordImages().then((images) => {
      if (!active) return
      setCustomImages(images)
    }).catch(() => setNotice('读取自定义图片失败，请重试。'))
    return () => { active = false }
  }, [])

  const move = (step: number) => setIndex((value) => (value + step + words.length) % words.length)
  const random = () => setIndex((value) => {
    if (words.length < 2) return value
    let next = value
    while (next === value) next = Math.floor(Math.random() * words.length)
    return next
  })

  const speak = (text = current.word) => {
    if (!('speechSynthesis' in window)) return
    speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = 0.82
    const voice = speechSynthesis.getVoices().find((item) => item.lang.startsWith('en'))
    if (voice) utterance.voice = voice
    utterance.onstart = () => setSpeaking(true)
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)
    speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    if (firstWord.current) {
      firstWord.current = false
      return
    }
    speak(current.word)
  }, [index])

  const mark = (status: Status) => {
    setProgress((value) => ({ ...value, [current.id]: status }))
    window.setTimeout(() => move(1), 180)
  }

  const replaceImage = async (wordId: string, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    if (!file.type.startsWith('image/')) { setNotice('请选择 JPG、PNG 或 WebP 图片。'); return }
    if (file.size > 5 * 1024 * 1024) { setNotice('图片不能超过 5 MB。'); return }
    try {
      const url = await saveWordImage(wordId, file)
      setCustomImages((value) => ({ ...value, [wordId]: url }))
      setNotice('图片已保存。')
    } catch { setNotice('图片保存失败，请重试。') }
  }

  const restoreImage = async (wordId: string) => {
    await deleteWordImage(wordId)
    setCustomImages((value) => {
      const next = { ...value }
      delete next[wordId]
      return next
    })
    setNotice('已恢复默认图片。')
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand"><span className="brand-mark">P</span><div><strong>图词岛</strong><small>PICTURE WORDS</small></div></div>
        <button className="profile" onClick={() => { setManagerOpen(true); setNotice('') }} aria-label="管理单词图片">管理单词 <span>⚙</span></button>
      </header>

      <section className="hero-copy">
        <div><p className="eyebrow">TODAY'S ADVENTURE</p><h1>看见图片，<em>记住单词。</em></h1></div>
        <div className="progress-wrap">
          <span>今日进度</span><strong>{learned} / {words.length}</strong>
          <div className="progress-track"><i style={{ width: `${learned / words.length * 100}%` }} /></div>
        </div>
      </section>

      <section className="study-layout">
        <button className="nav-arrow left" onClick={() => move(-1)} aria-label="上一个单词">‹</button>
        <article className="word-card" key={current.id}>
          <div className="picture" style={{ background: `linear-gradient(145deg, ${current.colors[0]}, color-mix(in srgb, ${current.colors[0]} 62%, white))` }}>
            <span className="category">{current.category}</span>
            {customImages[current.id]
              ? <img className="art custom-art" src={customImages[current.id]} alt={current.meaning} />
              : <span className="art" role="img" aria-label={current.meaning}>{current.emoji}</span>}
            <span className="picture-label">LOOK · LISTEN · LEARN</span>
          </div>
          <div className="word-info">
            <div className="word-heading"><div><h2>{current.word}</h2><p>{current.phonetic}</p></div>
              <button className={speaking ? 'sound speaking' : 'sound'} onClick={() => speak()} aria-label={`播放 ${current.word} 的发音`}>♪<span>{speaking ? '播放中' : '听发音'}</span></button>
            </div>
            <div className="meaning"><span>中文</span><strong>{current.meaning}</strong></div>
            <button className="example" onClick={() => speak(current.example)}><span>例句</span><p>{current.example}</p><i>♪</i></button>
            <div className="actions">
              <button className={progress[current.id] === 'review' ? 'review active' : 'review'} onClick={() => mark('review')}><span>↻</span>还要复习</button>
              <button className={progress[current.id] === 'known' ? 'known active' : 'known'} onClick={() => mark('known')}><span>✓</span>我认识了</button>
            </div>
          </div>
        </article>
        <button className="nav-arrow right" onClick={() => move(1)} aria-label="下一个单词">›</button>
      </section>

      <footer className="bottom-controls">
        <button onClick={random}>⤨&nbsp; 随机抽查</button>
        <div className="dots">{words.map((word, i) => <button key={word.id} onClick={() => setIndex(i)} className={i === index ? 'active' : ''} aria-label={`查看 ${word.word}`} />)}</div>
        <p>学习记录会自动保存在这台设备上</p>
      </footer>

      {managerOpen && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setManagerOpen(false) }}>
        <section className="manager" role="dialog" aria-modal="true" aria-labelledby="manager-title">
          <header><div><p>WORD LIBRARY</p><h2 id="manager-title">管理单词图片</h2></div><button onClick={() => setManagerOpen(false)} aria-label="关闭管理窗口">×</button></header>
          <p className="manager-help">选择一张图片即可立即替换。支持常见图片格式，最大 5 MB；图片保存在项目中，可供不同浏览器共享。</p>
          {notice && <p className="notice" role="status">{notice}</p>}
          <div className="word-grid">
            {words.map((word) => <article className="manage-item" key={word.id}>
              <div className="manage-preview" style={{ background: word.colors[0] }}>
                {customImages[word.id] ? <img src={customImages[word.id]} alt={word.meaning} /> : <span>{word.emoji}</span>}
              </div>
              <div className="manage-meta"><strong>{word.word}</strong><span>{word.meaning}</span></div>
              <label className="upload-button">选择图片<input type="file" accept="image/*" onChange={(event) => replaceImage(word.id, event)} /></label>
              {customImages[word.id] && <button className="restore-button" onClick={() => restoreImage(word.id)}>恢复默认</button>}
            </article>)}
          </div>
        </section>
      </div>}
    </main>
  )
}
