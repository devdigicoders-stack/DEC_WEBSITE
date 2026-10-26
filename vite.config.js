import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { sendApplicationEmail } from './api/mailer.js'

function careerApiPlugin() {
  return {
    name: 'career-api-server',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : ''
        if (url === '/api/apply' && req.method === 'POST') {
          let body = ''
          req.on('data', chunk => {
            body += chunk
          })
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}')
              if (!data.fullName || !data.email) {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ success: false, error: 'Full name and email are required.' }))
                return
              }
              const info = await sendApplicationEmail(data)
              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({
                success: true,
                message: 'Application submitted successfully! Your CV has been delivered to DEC HR.',
                messageId: info.messageId
              }))
            } catch (err) {
              console.error('Error sending application email:', err)
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({
                success: false,
                error: err.message || 'Failed to send email. Please check your credentials.'
              }))
            }
          })
        } else {
          next()
        }
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), careerApiPlugin()],
})

