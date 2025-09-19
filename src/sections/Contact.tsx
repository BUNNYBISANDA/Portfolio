import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { content } from '@/data/content'
import { Github, Linkedin, Phone, MessageSquare } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function Contact() {
  const { profile } = content
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  function validate() {
    const es: typeof errors = {}
    if (!form.name.trim()) es.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) es.email = 'Valid email is required'
    if (form.message.trim().length < 10) es.message = 'Message should be at least 10 characters'
    setErrors(es)
    return Object.keys(es).length === 0
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    // Placeholder async (easy to wire EmailJS later)
    try {
      await new Promise(res => setTimeout(res, 600))
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" title="Contact" subtitle="Let’s talk">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="type-body text-muted max-w-prose">
            I’m open to collaboration, coaching inquiries, and project work. The easiest way to reach me is by email or WhatsApp.
          </p>
          <div className="mt-4 space-y-2">
            <a className="block hover:text-accent" href={`mailto:${profile.email}`}>{profile.email}</a>
            <p className="type-caption">Location: {profile.location}</p>
          </div>
          <div className="mt-5 flex gap-3">
            {profile.socials.github && (
              <a href={profile.socials.github} aria-label="GitHub" className="inline-flex items-center gap-2 hover:text-accent"><Github size={18}/> GitHub</a>
            )}
            {profile.socials.linkedin && (
              <a href={profile.socials.linkedin} aria-label="LinkedIn" className="inline-flex items-center gap-2 hover:text-accent"><Linkedin size={18}/> LinkedIn</a>
            )}
            {profile.socials.whatsapp && (
              <a href={profile.socials.whatsapp} aria-label="WhatsApp" className="inline-flex items-center gap-2 hover:text-accent"><Phone size={18}/> WhatsApp</a>
            )}
            {profile.socials.discord && (
              <a href={profile.socials.discord} aria-label="Discord" className="inline-flex items-center gap-2 hover:text-accent"><MessageSquare size={18}/> Discord</a>
            )}
          </div>
        </div>
        <Card className="p-6">
          <form noValidate onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <label className="block">
                <span className="type-caption">Name</span>
                <input
                  className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <span id="name-error" className="text-red-500 text-sm">{errors.name}</span>}
              </label>
              <label className="block">
                <span className="type-caption">Email</span>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <span id="email-error" className="text-red-500 text-sm">{errors.email}</span>}
              </label>
              <label className="block">
                <span className="type-caption">Message</span>
                <textarea
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <span id="message-error" className="text-red-500 text-sm">{errors.message}</span>}
              </label>
              <div className="flex items-center gap-3">
                <Button type="submit" disabled={status==='sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </Button>
                {status === 'success' && <span className="text-green-600">Sent! I will reply soon.</span>}
                {status === 'error' && <span className="text-red-600">Something went wrong. Try again.</span>}
              </div>
            </div>
          </form>
        </Card>
      </div>
    </Section>
  )
}

