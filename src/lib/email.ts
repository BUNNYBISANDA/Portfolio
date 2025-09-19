import { content } from '@/data/content'

export type ContactFormPayload = {
  name: string
  email: string
  message: string
}

type EmailConfig = {
  serviceId: string | undefined
  templateId: string | undefined
  publicKey: string | undefined
  toEmail: string
}

const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'

const emailConfig: EmailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  toEmail: import.meta.env.VITE_CONTACT_TO_EMAIL ?? content.profile.email
}

export function isEmailConfigured() {
  return Boolean(emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey)
}

export async function sendContactEmail(payload: ContactFormPayload) {
  if (!isEmailConfigured()) {
    throw new Error('Email service is not configured. Set VITE_EMAILJS_* env vars.')
  }

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: emailConfig.serviceId,
      template_id: emailConfig.templateId,
      user_id: emailConfig.publicKey,
      template_params: {
        from_name: payload.name,
        from_email: payload.email,
        message: payload.message,
        to_email: emailConfig.toEmail
      }
    })
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Unknown error')
    throw new Error(`Email send failed: ${errorText}`)
  }
}
