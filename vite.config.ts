import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs/promises'
import path from 'node:path'

const imageDirectory = path.resolve('user-images')
const allowedTypes: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/svg+xml': 'svg',
}

function sharedImages() {
  return {
    name: 'shared-word-images',
    configureServer(server: { middlewares: { use: (handler: (req: any, res: any, next: () => void) => void) => void } }) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url ?? '/', 'http://localhost')

        if (url.pathname.startsWith('/user-images/')) {
          const filename = path.basename(url.pathname)
          try {
            const file = await fs.readFile(path.join(imageDirectory, filename))
            const extension = path.extname(filename).slice(1)
            const contentTypes: Record<string, string> = { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif', svg: 'image/svg+xml' }
            res.statusCode = 200
            res.setHeader('Content-Type', contentTypes[extension] ?? 'application/octet-stream')
            res.setHeader('Cache-Control', 'no-cache')
            res.end(file)
          } catch { res.statusCode = 404; res.end('Not found') }
          return
        }

        if (url.pathname === '/api/word-images' && req.method === 'GET') {
          await fs.mkdir(imageDirectory, { recursive: true })
          const files = await fs.readdir(imageDirectory)
          const images: Record<string, string> = {}
          files.forEach((file) => {
            const match = file.match(/^([a-z0-9-]+)\.(jpg|png|webp|gif|svg)$/)
            if (match) images[match[1]] = `/user-images/${file}`
          })
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(images))
          return
        }

        const match = url.pathname.match(/^\/api\/word-images\/([a-z0-9-]+)$/)
        if (!match) { next(); return }
        const wordId = match[1]
        await fs.mkdir(imageDirectory, { recursive: true })

        if (req.method === 'DELETE') {
          const files = await fs.readdir(imageDirectory)
          await Promise.all(files.filter((file) => file.startsWith(`${wordId}.`)).map((file) => fs.unlink(path.join(imageDirectory, file))))
          res.statusCode = 204
          res.end()
          return
        }

        if (req.method === 'POST') {
          const extension = allowedTypes[String(req.headers['content-type'] ?? '').split(';')[0]]
          if (!extension) { res.statusCode = 415; res.end('Unsupported image type'); return }
          const chunks: Buffer[] = []
          let size = 0
          for await (const chunk of req) {
            size += chunk.length
            if (size > 5 * 1024 * 1024) { res.statusCode = 413; res.end('Image too large'); return }
            chunks.push(chunk)
          }
          const files = await fs.readdir(imageDirectory)
          await Promise.all(files.filter((file) => file.startsWith(`${wordId}.`)).map((file) => fs.unlink(path.join(imageDirectory, file))))
          const filename = `${wordId}.${extension}`
          await fs.writeFile(path.join(imageDirectory, filename), Buffer.concat(chunks))
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ url: `/user-images/${filename}?v=${Date.now()}` }))
          return
        }

        res.statusCode = 405
        res.end('Method not allowed')
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), sharedImages()],
})
