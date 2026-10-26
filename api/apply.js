import { sendApplicationEmail } from './mailer.js'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb'
    }
  }
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method Not Allowed' })
    return
  }

  try {
    const data = req.body
    if (!data || !data.fullName || !data.email) {
      res.status(400).json({ success: false, error: 'Candidate name and email are required.' })
      return
    }

    const info = await sendApplicationEmail(data)
    res.status(200).json({
      success: true,
      message: 'Application submitted successfully! Your CV has been delivered to DEC HR.',
      messageId: info.messageId
    })
  } catch (error) {
    console.error('Error in /api/apply:', error)
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to send application email. Please try again.'
    })
  }
}
