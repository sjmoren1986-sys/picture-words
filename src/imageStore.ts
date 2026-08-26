export async function getAllWordImages(): Promise<Record<string, string>> {
  const response = await fetch('/api/word-images')
  if (!response.ok) throw new Error('Could not load images')
  return response.json()
}

export async function saveWordImage(wordId: string, image: Blob): Promise<string> {
  const response = await fetch(`/api/word-images/${wordId}`, {
    method: 'POST',
    headers: { 'Content-Type': image.type },
    body: image,
  })
  if (!response.ok) throw new Error('Could not save image')
  const result: { url: string } = await response.json()
  return result.url
}

export async function deleteWordImage(wordId: string): Promise<void> {
  const response = await fetch(`/api/word-images/${wordId}`, { method: 'DELETE' })
  if (!response.ok) throw new Error('Could not delete image')
}
