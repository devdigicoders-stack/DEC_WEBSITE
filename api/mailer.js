import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Ensure .env is loaded
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.resolve(__dirname, '../.env') })

export async function sendApplicationEmail(data) {
  const {
    fullName,
    email,
    phone,
    position,
    location,
    experience,
    currentRole,
    noticePeriod,
    portfolioUrl,
    message,
    cv
  } = data

  const emailUser = process.env.EMAIL_USER?.trim()
  const rawPass = process.env.EMAIL_PASS || ''
  const emailPass = rawPass.replace(/\s+/g, '').trim() // Remove spaces from Google App Password
  const emailTo = process.env.EMAIL_TO?.trim() || emailUser

  if (!emailUser || !emailPass) {
    throw new Error('Email credentials are not configured in .env (EMAIL_USER, EMAIL_PASS)')
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass
    }
  })

  // Format attachment
  const attachments = []
  if (cv && cv.base64) {
    // If base64 contains data URL prefix (e.g. data:application/pdf;base64,...), strip it
    const base64Data = cv.base64.replace(/^data:[^;]+;base64,/, '')
    attachments.push({
      filename: cv.filename || 'Candidate_Resume.pdf',
      content: Buffer.from(base64Data, 'base64'),
      contentType: cv.contentType || 'application/octet-stream'
    })
  }

  const submissionDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Qatar',
    dateStyle: 'full',
    timeStyle: 'medium'
  })

  const rawPhoneDigits = (phone || '').replace(/[^0-9]/g, '')

  // Mobile-Optimized, 100% Fluid, High-Contrast Executive Email Template
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Job Application - DEC Careers</title>
      <style>
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; }
      </style>
    </head>
    <body style="margin: 0; padding: 0; width: 100% !important; background-color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      
      <!-- Outer Wrapper Table -->
      <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="width: 100% !important; background-color: #F1F5F9; margin: 0; padding: 12px 6px;">
        <tr>
          <td align="center" style="padding: 0;">
            
            <!-- Main Content Card (Max 580px, 100% fluid on mobile) -->
            <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 580px; width: 100%; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #E2E8F0; margin: 0 auto;">
              
              <!-- 1. Header Banner -->
              <tr>
                <td style="background-color: #111111; padding: 26px 18px; text-align: center; border-bottom: 3px solid #B08D57;">
                  <div style="display: inline-block; background-color: rgba(176,141,87,0.18); border: 1px solid #B08D57; color: #DFBF82; font-size: 10px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 10px;">
                    DESENTRAL ENGINEERING CONSULTANCY | GRADE A
                  </div>
                  <h1 style="color: #FFFFFF; font-size: 21px; font-weight: 800; margin: 0 0 5px 0; letter-spacing: 0.3px; line-height: 1.25;">
                    New Candidate Application
                  </h1>
                  <p style="color: #DFBF82; font-size: 13px; font-weight: 600; margin: 0;">
                    DEC Careers & Talent Acquisition Portal
                  </p>
                </td>
              </tr>

              <!-- 2. Applied Position Highlight Box -->
              <tr>
                <td style="padding: 20px 18px 10px 18px;">
                  <div style="background-color: #FFFDF9; border: 1px solid #E8D8BE; border-left: 4px solid #B08D57; border-radius: 8px; padding: 14px 16px;">
                    <div style="font-size: 10px; font-weight: 800; color: #8F6F3E; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">
                      POSITION APPLIED FOR
                    </div>
                    <div style="font-size: 18px; font-weight: 800; color: #111111; line-height: 1.3; word-break: break-word;">
                      ${position || 'General Engineering Application'}
                    </div>
                  </div>
                </td>
              </tr>

              <!-- 3. Candidate Details (Stacked Fluid Field Cards - Never Clipped) -->
              <tr>
                <td style="padding: 10px 18px;">
                  
                  <!-- Section Heading -->
                  <div style="font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #B08D57; padding-bottom: 8px; margin-bottom: 12px; border-bottom: 1px solid #E2E8F0;">
                    CANDIDATE INFORMATION
                  </div>

                  <!-- Candidate Name -->
                  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px 14px; margin-bottom: 10px;">
                    <div style="font-size: 10px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 3px;">
                      Full Name
                    </div>
                    <div style="font-size: 17px; font-weight: 800; color: #0F172A; line-height: 1.3; word-break: break-word;">
                      ${fullName}
                    </div>
                  </div>

                  <!-- Email Address -->
                  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px 14px; margin-bottom: 10px;">
                    <div style="font-size: 10px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 3px;">
                      Email Address
                    </div>
                    <div style="font-size: 15px; font-weight: 700; line-height: 1.3; word-break: break-all;">
                      <a href="mailto:${email}" style="color: #0284C7; text-decoration: none;">${email}</a>
                    </div>
                  </div>

                  <!-- Phone Number & WhatsApp Button -->
                  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px 14px; margin-bottom: 10px;">
                    <div style="font-size: 10px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 3px;">
                      Phone / Mobile Number
                    </div>
                    <div style="font-size: 16px; font-weight: 800; color: #0F172A; margin-bottom: 8px; word-break: break-word;">
                      <a href="tel:${phone}" style="color: #0F172A; text-decoration: none;">${phone}</a>
                    </div>
                    ${rawPhoneDigits ? `
                      <div>
                        <a href="https://wa.me/${rawPhoneDigits}" target="_blank" style="display: inline-block; background-color: #10B981; color: #FFFFFF; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 6px; text-decoration: none; box-shadow: 0 2px 4px rgba(16,185,129,0.25);">
                          💬 Chat with Candidate on WhatsApp
                        </a>
                      </div>
                    ` : ''}
                  </div>

                  <!-- Preferred Location -->
                  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px 14px; margin-bottom: 10px;">
                    <div style="font-size: 10px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 3px;">
                      Preferred Location
                    </div>
                    <div style="font-size: 14px; font-weight: 700; color: #1E293B; line-height: 1.3; word-break: break-word;">
                      📍 ${location || 'Qatar / Egypt / KSA'}
                    </div>
                  </div>

                  <!-- Total Experience -->
                  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px 14px; margin-bottom: 10px;">
                    <div style="font-size: 10px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 3px;">
                      Total Experience
                    </div>
                    <div style="font-size: 14px; font-weight: 700; color: #1E293B; line-height: 1.3; word-break: break-word;">
                      ⏱ ${experience || 'Not specified'}
                    </div>
                  </div>

                  ${currentRole ? `
                  <!-- Current Role / Employer -->
                  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px 14px; margin-bottom: 10px;">
                    <div style="font-size: 10px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 3px;">
                      Current Role / Employer
                    </div>
                    <div style="font-size: 14px; font-weight: 700; color: #1E293B; line-height: 1.3; word-break: break-word;">
                      💼 ${currentRole}
                    </div>
                  </div>
                  ` : ''}

                  ${noticePeriod ? `
                  <!-- Notice Period -->
                  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px 14px; margin-bottom: 10px;">
                    <div style="font-size: 10px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 3px;">
                      Notice Period / Availability
                    </div>
                    <div style="font-size: 14px; font-weight: 700; color: #1E293B; line-height: 1.3; word-break: break-word;">
                      ⏳ ${noticePeriod}
                    </div>
                  </div>
                  ` : ''}

                  ${portfolioUrl ? `
                  <!-- LinkedIn / Portfolio URL -->
                  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px 14px; margin-bottom: 10px;">
                    <div style="font-size: 10px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 3px;">
                      LinkedIn Profile / Portfolio
                    </div>
                    <div style="font-size: 13px; font-weight: 700; line-height: 1.3; word-break: break-all;">
                      <a href="${portfolioUrl}" target="_blank" style="color: #0284C7; text-decoration: underline;">${portfolioUrl}</a>
                    </div>
                  </div>
                  ` : ''}

                  <!-- Submission Timestamp -->
                  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 10px 14px; margin-bottom: 10px;">
                    <div style="font-size: 10px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 2px;">
                      Received Time
                    </div>
                    <div style="font-size: 12px; font-weight: 600; color: #475569; word-break: break-word;">
                      ${submissionDate} (Qatar Time)
                    </div>
                  </div>

                </td>
              </tr>

              <!-- 4. Candidate Cover Note (if provided) -->
              ${message ? `
              <tr>
                <td style="padding: 6px 18px 14px 18px;">
                  <div style="background-color: #FFFDF9; border: 1px solid #E8D8BE; border-radius: 10px; padding: 14px 16px;">
                    <div style="font-size: 10px; font-weight: 800; color: #8F6F3E; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
                      Candidate Message / Cover Note
                    </div>
                    <div style="font-size: 13px; line-height: 1.6; color: #1E293B; white-space: pre-wrap; word-break: break-word;">
                      ${message}
                    </div>
                  </div>
                </td>
              </tr>
              ` : ''}

              <!-- 5. Attached CV Confirmation Card -->
              <tr>
                <td style="padding: 6px 18px 20px 18px;">
                  <div style="background-color: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 10px; padding: 14px 16px;">
                    <div style="font-size: 10px; font-weight: 800; color: #047857; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">
                      Attached Candidate CV / Resume
                    </div>
                    <div style="font-size: 15px; font-weight: 800; color: #065F46; word-break: break-all;">
                      📎 ${cv && cv.filename ? cv.filename : 'Candidate Resume'}
                    </div>
                    <div style="font-size: 12px; color: #047857; margin-top: 4px; font-weight: 500;">
                      ✓ This file is directly attached to this email. You can open or download it anytime.
                    </div>
                  </div>
                </td>
              </tr>

              <!-- 6. Footer -->
              <tr>
                <td style="background-color: #0F172A; padding: 22px 18px; text-align: center; border-top: 2px solid #B08D57;">
                  <div style="color: #DFBF82; font-size: 12px; font-weight: 700; margin-bottom: 4px;">
                    Desentral Engineering Consultancy (DEC) · Grade A
                  </div>
                  <div style="color: #94A3B8; font-size: 11px; line-height: 1.5;">
                    Manarat Lusail Tower, Office 704, Lusail, Qatar &nbsp;|&nbsp; Dokki, Giza, Egypt
                  </div>
                  <div style="color: #64748B; font-size: 10px; margin-top: 8px;">
                    Automated application dossier generated from DEC Careers Portal (desentralqatar.com)
                  </div>
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </body>
    </html>
  `

  const mailOptions = {
    from: `"DEC Careers Portal" <${emailUser}>`,
    to: emailTo,
    replyTo: email,
    subject: `New Job Application: ${fullName} - ${position || 'Engineering Role'}`,
    text: `New Job Application Received from DEC Careers Portal\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nLocation: ${location}\nExperience: ${experience}\nCurrent Role: ${currentRole || 'N/A'}\nNotice Period: ${noticePeriod || 'N/A'}\nLinkedIn/Portfolio: ${portfolioUrl || 'N/A'}\n\nMessage:\n${message || 'N/A'}\n\nCandidate CV (${cv?.filename || 'None'}) has been attached.`,
    html: htmlContent,
    attachments
  }

  const info = await transporter.sendMail(mailOptions)
  return info
}
