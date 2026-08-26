export type Word = {
  id: string
  word: string
  phonetic: string
  meaning: string
  example: string
  emoji: string
  colors: [string, string]
  category: string
}

export const words: Word[] = [
  { id: 'apple', word: 'apple', phonetic: '/ˈæp.əl/', meaning: '苹果', example: 'I eat an apple every day.', emoji: '🍎', colors: ['#ffe3d8', '#ff7656'], category: '食物' },
  { id: 'cat', word: 'cat', phonetic: '/kæt/', meaning: '猫', example: 'The cat is sleeping in the sun.', emoji: '🐈', colors: ['#ffe9b7', '#eca948'], category: '动物' },
  { id: 'book', word: 'book', phonetic: '/bʊk/', meaning: '书', example: 'This is my favorite book.', emoji: '📚', colors: ['#d9edff', '#6198cf'], category: '日常' },
  { id: 'sun', word: 'sun', phonetic: '/sʌn/', meaning: '太阳', example: 'The sun is warm and bright.', emoji: '☀️', colors: ['#fff0ae', '#f3b93c'], category: '自然' },
  { id: 'bicycle', word: 'bicycle', phonetic: '/ˈbaɪ.sɪ.kəl/', meaning: '自行车', example: 'I ride my bicycle to the park.', emoji: '🚲', colors: ['#d8f2e7', '#57a887'], category: '交通' },
  { id: 'dog', word: 'dog', phonetic: '/dɒɡ/', meaning: '狗', example: 'The dog loves to play.', emoji: '🐕', colors: ['#eadcff', '#8f6fc4'], category: '动物' },
  { id: 'flower', word: 'flower', phonetic: '/ˈflaʊ.ər/', meaning: '花', example: 'This flower smells wonderful.', emoji: '🌻', colors: ['#fff1c9', '#d99f34'], category: '自然' },
  { id: 'milk', word: 'milk', phonetic: '/mɪlk/', meaning: '牛奶', example: 'Would you like some milk?', emoji: '🥛', colors: ['#e3f2f5', '#6aa6af'], category: '食物' },
  { id: 'credit-card', word: 'credit card', phonetic: '/ˈkred.ɪt ˌkɑːrd/', meaning: '信用卡', example: 'Can I pay by credit card?', emoji: '💳', colors: ['#e2e8ff', '#6576c9'], category: '金融' },
  { id: 'bank-card', word: 'bank card', phonetic: '/ˈbæŋk ˌkɑːrd/', meaning: '银行卡', example: 'I left my bank card at home.', emoji: '💳', colors: ['#dff2ec', '#4f9c81'], category: '金融' },
  { id: 'loan', word: 'loan', phonetic: '/ləʊn/', meaning: '贷款', example: 'She applied for a bank loan.', emoji: '🏦', colors: ['#e7ecf1', '#657886'], category: '金融' },
  { id: 'black-bean', word: 'black bean', phonetic: '/ˌblæk ˈbiːn/', meaning: '黑豆', example: 'Black beans are rich in protein.', emoji: '🫘', colors: ['#e6ded5', '#68594d'], category: '食物' },
  { id: 'glasses-case', word: 'glasses case', phonetic: '/ˈɡlɑː.sɪz ˌkeɪs/', meaning: '眼镜盒', example: 'My glasses are in the glasses case.', emoji: '👓', colors: ['#f0e3d9', '#a87358'], category: '日常' },
  { id: 'shampoo', word: 'shampoo', phonetic: '/ʃæmˈpuː/', meaning: '洗发水', example: 'I need to buy some shampoo.', emoji: '🧴', colors: ['#e5dcf7', '#8e70b7'], category: '日常' },
  { id: 'remote-control', word: 'remote control', phonetic: '/rɪˌməʊt kənˈtrəʊl/', meaning: '遥控器', example: 'Where is the remote control?', emoji: '🎛️', colors: ['#dee8eb', '#617d85'], category: '家居' },
  { id: 'air-conditioner', word: 'air conditioner', phonetic: '/ˈeər kənˌdɪʃ.ən.ər/', meaning: '空调', example: 'Please turn on the air conditioner.', emoji: '❄️', colors: ['#dcefff', '#68a7d4'], category: '家居' },
  { id: 'curtain', word: 'curtain', phonetic: '/ˈkɜː.tən/', meaning: '窗帘', example: 'She opened the curtain this morning.', emoji: '🪟', colors: ['#f5dfdc', '#b86f68'], category: '家居' },
  { id: 'kettlebell', word: 'kettlebell', phonetic: '/ˈket.əl.bel/', meaning: '壶铃', example: 'He lifts a kettlebell at the gym.', emoji: '🏋️', colors: ['#e0e5df', '#667369'], category: '运动' },
  { id: 'commute', word: 'commute', phonetic: '/kəˈmjuːt/', meaning: '通勤', example: 'I commute to work by train.', emoji: '🚆', colors: ['#dceaf1', '#527d91'], category: '通勤' },
  { id: 'subway', word: 'subway', phonetic: '/ˈsʌb.weɪ/', meaning: '地铁', example: 'I take the subway every morning.', emoji: '🚇', colors: ['#e3e8ee', '#657585'], category: '交通' },
  { id: 'bus-stop', word: 'bus stop', phonetic: '/ˈbʌs ˌstɒp/', meaning: '公交车站', example: 'She is waiting at the bus stop.', emoji: '🚏', colors: ['#e6f0e4', '#72906c'], category: '交通' },
  { id: 'rush-hour', word: 'rush hour', phonetic: '/ˈrʌʃ ˌaʊər/', meaning: '上下班高峰期', example: 'The subway is crowded during rush hour.', emoji: '🚉', colors: ['#f4e6d9', '#ac7654'], category: '通勤' },
  { id: 'traffic-jam', word: 'traffic jam', phonetic: '/ˈtræf.ɪk ˌdʒæm/', meaning: '交通堵塞', example: 'We were late because of a traffic jam.', emoji: '🚗', colors: ['#f1dedb', '#a96058'], category: '交通' },
  { id: 'crosswalk', word: 'crosswalk', phonetic: '/ˈkrɒs.wɔːk/', meaning: '人行横道', example: 'Please use the crosswalk.', emoji: '🚶', colors: ['#e6e7e5', '#727873'], category: '交通' },
  { id: 'platform', word: 'platform', phonetic: '/ˈplæt.fɔːm/', meaning: '站台', example: 'The train leaves from platform three.', emoji: '🚉', colors: ['#e1eaf0', '#5d7d90'], category: '交通' },
  { id: 'transfer', word: 'transfer', phonetic: '/trænsˈfɜːr/', meaning: '换乘', example: 'Transfer to Line 2 at this station.', emoji: '🔄', colors: ['#e1f0eb', '#529078'], category: '交通' },
  { id: 'fare', word: 'fare', phonetic: '/feər/', meaning: '车费', example: 'How much is the bus fare?', emoji: '🎫', colors: ['#f6e9ce', '#b58b3e'], category: '交通' },
  { id: 'commuter', word: 'commuter', phonetic: '/kəˈmjuː.tər/', meaning: '通勤者', example: 'Many commuters take this train.', emoji: '🧑‍💼', colors: ['#e2ebf3', '#617f99'], category: '通勤' },
  { id: 'office', word: 'office', phonetic: '/ˈɒf.ɪs/', meaning: '办公室', example: 'Our office is on the tenth floor.', emoji: '🏢', colors: ['#e1e9ed', '#687e89'], category: '办公' },
  { id: 'elevator', word: 'elevator', phonetic: '/ˈel.ɪ.veɪ.tər/', meaning: '电梯', example: 'Take the elevator to the fifth floor.', emoji: '🛗', colors: ['#e6e8e9', '#747b7e'], category: '办公' },
  { id: 'access-card', word: 'access card', phonetic: '/ˈæk.ses ˌkɑːrd/', meaning: '门禁卡', example: 'I use my access card to enter the office.', emoji: '🪪', colors: ['#e3e6f4', '#6c75a5'], category: '办公' },
  { id: 'colleague', word: 'colleague', phonetic: '/ˈkɒl.iːɡ/', meaning: '同事', example: 'I had lunch with my colleague.', emoji: '🤝', colors: ['#e1f0e8', '#5c8f75'], category: '办公' },
  { id: 'meeting', word: 'meeting', phonetic: '/ˈmiː.tɪŋ/', meaning: '会议', example: 'We have a meeting at ten o’clock.', emoji: '👥', colors: ['#e6e1f1', '#77699a'], category: '办公' },
  { id: 'deadline', word: 'deadline', phonetic: '/ˈded.laɪn/', meaning: '截止日期', example: 'The deadline is this Friday.', emoji: '⏰', colors: ['#f5e0da', '#b76350'], category: '办公' },
  { id: 'laptop', word: 'laptop', phonetic: '/ˈlæp.tɒp/', meaning: '笔记本电脑', example: 'I bring my laptop to work every day.', emoji: '💻', colors: ['#dde8ee', '#5e7c8c'], category: '办公' },
  { id: 'lunch-break', word: 'lunch break', phonetic: '/ˈlʌntʃ ˌbreɪk/', meaning: '午休', example: 'I go for a walk during my lunch break.', emoji: '🍱', colors: ['#f5ead5', '#ae8045'], category: '作息' },
  { id: 'overtime', word: 'overtime', phonetic: '/ˈəʊ.və.taɪm/', meaning: '加班', example: 'I have to work overtime tonight.', emoji: '🌙', colors: ['#e1e3f1', '#686f9b'], category: '作息' },
  { id: 'clock-out', word: 'clock out', phonetic: '/ˌklɒk ˈaʊt/', meaning: '打卡下班', example: 'I usually clock out at six.', emoji: '🏁', colors: ['#e0eee6', '#5f9174'], category: '作息' },
]
