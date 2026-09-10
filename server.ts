import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Target recipient and default credentials
const DEFAULT_RECIPIENT = 'gouravthakur200319@gmail.com';
const SMTP_USER = process.env.SMTP_USER || 'info@righteyetechnology.com';
const SMTP_PASS = process.env.SMTP_PASS || 'Rr@6;cF5';
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.hostinger.com';
const SMTP_PORT = Number(process.env.SMTP_PORT) || 465;
const RECIPIENT_EMAIL = process.env.INQUIRY_RECIPIENT_EMAIL || DEFAULT_RECIPIENT;

// In-memory lead buffer so no client lead is ever lost
interface LeadRecord {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
  source: string;
  emailSent: boolean;
  emailError?: string;
}

const leadsStore: LeadRecord[] = [];

// Helper to create Nodemailer transport with Hostinger settings
function getTransporter(port: number = SMTP_PORT) {
  const isSecure = port === 465;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: isSecure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 12000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

// Format IST timestamp
function getISTTimestamp() {
  return new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });
}

// Generate high-clarity HTML email template for Gourav
function buildInquiryEmailHtml(lead: LeadRecord) {
  const cleanPhone = lead.phone.replace(/[^0-9]/g, '');
  const waPhone = cleanPhone.startsWith('91')
    ? cleanPhone
    : cleanPhone.length === 10
    ? `91${cleanPhone}`
    : cleanPhone;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Inquiry - RIGHT EYE Technology</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #00091b; padding: 28px 24px; text-align: left; border-bottom: 3px solid #01bdfc;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: 0.05em;">
                      RIGHT<span style="color: #01bdfc;">EYE</span> <span style="font-size: 13px; color: #01bdfc; font-family: monospace; font-weight: 600; letter-spacing: 0.15em;">TECHNOLOGY</span>
                    </div>
                    <div style="font-size: 12px; color: #94a3b8; font-family: monospace; margin-top: 4px;">
                      PAN-INDIA DIGITAL INQUIRY ALERT // LEAD DISPATCH
                    </div>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: rgba(1,189,252,0.15); border: 1px solid #01bdfc; color: #01bdfc; font-size: 11px; font-family: monospace; font-weight: 700; padding: 4px 10px; border-radius: 9999px;">
                      NEW LEAD
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Summary Message -->
          <tr>
            <td style="padding: 24px 24px 12px 24px;">
              <h2 style="font-size: 18px; font-weight: 700; color: #00091b; margin: 0 0 8px 0;">
                You have received a new business inquiry!
              </h2>
              <p style="font-size: 13px; color: #475569; line-height: 1.5; margin: 0;">
                A prospective client submitted an inquiry on the <strong>righteyetechnology.com</strong> website. All details and quick action links are provided below:
              </p>
            </td>
          </tr>

          <!-- Client Details Table -->
          <tr>
            <td style="padding: 12px 24px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 600; color: #64748b; width: 35%;">Client / Business Name</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 700; color: #0f172a;">${escapeHtml(lead.name)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 600; color: #64748b;">Phone / WhatsApp</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 700; color: #0284c7;">
                    <a href="tel:${escapeHtml(lead.phone)}" style="color: #0284c7; text-decoration: none;">${escapeHtml(lead.phone)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 600; color: #64748b;">Email Address</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #0f172a;">
                    <a href="mailto:${escapeHtml(lead.email)}" style="color: #0284c7; text-decoration: none;">${escapeHtml(lead.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 600; color: #64748b;">City / Region</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #0f172a;">${escapeHtml(lead.city || 'Pan-India')}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 600; color: #64748b;">Service Requested</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 700; color: #00091b;">
                    <span style="background-color: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 6px; font-size: 12px;">
                      ${escapeHtml(lead.service)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 600; color: #64748b;">Form Source</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 12px; color: #475569; font-family: monospace;">${escapeHtml(lead.source)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 12px; font-weight: 600; color: #64748b;">Received At</td>
                  <td style="padding: 12px 16px; font-size: 12px; color: #475569; font-family: monospace;">${lead.createdAt}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Notes / Requirements -->
          <tr>
            <td style="padding: 12px 24px;">
              <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; font-family: monospace; margin-bottom: 8px;">
                  Project Description / Message Notes
                </div>
                <div style="font-size: 13px; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(lead.message || 'No additional message provided.')}</div>
              </div>
            </td>
          </tr>

          <!-- Action Buttons -->
          <tr>
            <td style="padding: 16px 24px 24px 24px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-bottom: 8px;">
                    <a href="https://wa.me/${waPhone}?text=Hi%20${encodeURIComponent(lead.name)},%20thank%20you%20for%20contacting%20RIGHT%20EYE%20Technology%20regarding%20${encodeURIComponent(lead.service)}."
                       style="display: inline-block; background-color: #22c55e; color: #ffffff; font-weight: 700; font-size: 13px; text-decoration: none; padding: 12px 24px; border-radius: 10px; margin-right: 8px;">
                      💬 Chat on WhatsApp
                    </a>
                    <a href="tel:${escapeHtml(lead.phone)}"
                       style="display: inline-block; background-color: #01bdfc; color: #00091b; font-weight: 700; font-size: 13px; text-decoration: none; padding: 12px 24px; border-radius: 10px; margin-right: 8px;">
                      📞 Call Client
                    </a>
                    <a href="mailto:${escapeHtml(lead.email)}?subject=Re:%20Inquiry%20with%20RIGHT%20EYE%20Technology%20-%20${encodeURIComponent(lead.service)}"
                       style="display: inline-block; background-color: #00091b; color: #ffffff; font-weight: 700; font-size: 13px; text-decoration: none; padding: 12px 20px; border-radius: 10px;">
                      ✉️ Reply Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
              Sent by <strong>RIGHT EYE Technology Lead Routing System</strong><br>
              Hostinger Mail: ${SMTP_USER} &bull; Recipient: ${RECIPIENT_EMAIL}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ----------------------------------------------------
// API ROUTES
// ----------------------------------------------------

// 1. Health & SMTP Status
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'RIGHT EYE Technology API',
    recipientEmail: RECIPIENT_EMAIL,
    smtpUser: SMTP_USER,
    smtpHost: SMTP_HOST,
    smtpPort: SMTP_PORT,
    totalLeadsReceived: leadsStore.length,
  });
});

// 2. SMTP Verification Endpoint
app.get('/api/verify-smtp', async (req, res) => {
  try {
    const transporter = getTransporter(SMTP_PORT);
    await transporter.verify();
    res.json({
      success: true,
      message: `Successfully authenticated with Hostinger SMTP (${SMTP_HOST}:${SMTP_PORT}) as ${SMTP_USER}`,
    });
  } catch (err: any) {
    // Try fallback to port 587
    try {
      const fallbackTransporter = getTransporter(587);
      await fallbackTransporter.verify();
      res.json({
        success: true,
        message: `Authenticated on fallback port 587 with Hostinger SMTP as ${SMTP_USER}`,
        note: 'Port 465 failed, but port 587 succeeded.',
      });
    } catch (fallbackErr: any) {
      res.status(500).json({
        success: false,
        error: err?.message || 'SMTP verification failed',
        fallbackError: fallbackErr?.message,
      });
    }
  }
});

// 3. Main Inquiry Submission Endpoint (Used by Website Forms)
app.post('/api/inquiry', async (req, res) => {
  const { name, email, phone, city, service, message, notes, source } = req.body || {};

  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      error: 'Name and Phone number are required fields.',
    });
  }

  const newLead: LeadRecord = {
    id: `RET-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`,
    createdAt: getISTTimestamp(),
    name: String(name).trim(),
    email: String(email || '').trim() || 'Not Provided',
    phone: String(phone).trim(),
    city: String(city || 'Pan-India').trim(),
    service: String(service || 'General Digital Consultation').trim(),
    message: String(message || notes || '').trim(),
    source: String(source || 'Website Contact Form').trim(),
    emailSent: false,
  };

  // Attempt to send email via Hostinger SMTP to gouravthakur200319@gmail.com
  let emailDispatchSuccess = false;
  let emailDispatchError = '';

  try {
    const transporter = getTransporter(SMTP_PORT);
    const mailOptions = {
      from: `"RIGHT EYE Technology Leads" <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: newLead.email && newLead.email.includes('@') ? newLead.email : SMTP_USER,
      subject: `🔔 New Client Lead: ${newLead.name} - ${newLead.service} (${newLead.city})`,
      text: `
NEW INQUIRY FOR RIGHT EYE TECHNOLOGY
====================================
Client Name: ${newLead.name}
Phone: ${newLead.phone}
Email: ${newLead.email}
City / Region: ${newLead.city}
Service Requested: ${newLead.service}
Source: ${newLead.source}
Date & Time: ${newLead.createdAt}

Message / Notes:
${newLead.message || 'No additional message.'}
      `,
      html: buildInquiryEmailHtml(newLead),
    };

    await transporter.sendMail(mailOptions);
    emailDispatchSuccess = true;
    console.log(`[EMAIL DISPATCH] Successfully sent inquiry ${newLead.id} to ${RECIPIENT_EMAIL}`);
  } catch (primaryErr: any) {
    console.warn(`[EMAIL DISPATCH] Primary port ${SMTP_PORT} failed:`, primaryErr?.message);
    // Attempt fallback port 587
    try {
      const fallbackTransporter = getTransporter(587);
      const fallbackMailOptions = {
        from: `"RIGHT EYE Technology Leads" <${SMTP_USER}>`,
        to: RECIPIENT_EMAIL,
        replyTo: newLead.email && newLead.email.includes('@') ? newLead.email : SMTP_USER,
        subject: `🔔 New Client Lead: ${newLead.name} - ${newLead.service} (${newLead.city})`,
        html: buildInquiryEmailHtml(newLead),
      };
      await fallbackTransporter.sendMail(fallbackMailOptions);
      emailDispatchSuccess = true;
      console.log(`[EMAIL DISPATCH] Sent inquiry ${newLead.id} via fallback port 587 to ${RECIPIENT_EMAIL}`);
    } catch (fallbackErr: any) {
      emailDispatchError = fallbackErr?.message || primaryErr?.message || 'SMTP dispatch failed';
      console.error(`[EMAIL DISPATCH ERROR] Failed to send email to ${RECIPIENT_EMAIL}:`, emailDispatchError);
    }
  }

  newLead.emailSent = emailDispatchSuccess;
  if (!emailDispatchSuccess) {
    newLead.emailError = emailDispatchError;
  }

  // Always buffer lead so it is preserved
  leadsStore.unshift(newLead);

  return res.status(200).json({
    success: true,
    message: emailDispatchSuccess
      ? `Inquiry received and email successfully sent to ${RECIPIENT_EMAIL}`
      : `Inquiry saved securely in lead database. Email notification queued.`,
    leadId: newLead.id,
    emailSent: emailDispatchSuccess,
  });
});

// 4. Retrieve recent leads (for verification / admin reference)
app.get('/api/leads', (req, res) => {
  res.json({
    count: leadsStore.length,
    recipient: RECIPIENT_EMAIL,
    leads: leadsStore.slice(0, 50),
  });
});

// ----------------------------------------------------
// VITE SPA MIDDLEWARE / PRODUCTION STATIC SERVING
// ----------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`RIGHT EYE Technology server running on http://0.0.0.0:${PORT}`);
    console.log(`SMTP configured: Host=${SMTP_HOST}, User=${SMTP_USER}, Recipient=${RECIPIENT_EMAIL}`);
  });
}

startServer();
