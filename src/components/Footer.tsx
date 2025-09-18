import { Github, Linkedin, Phone, MessageSquare } from 'lucide-react'
import { content } from '@/data/content'

export default function Footer() {
  const { profile } = content
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="type-caption">© {year} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-accent" href="#hero">Home</a>
          <a className="hover:text-accent" href="#projects">Projects</a>
          <a className="hover:text-accent" href="#coaching">Coaching</a>
        </div>
        <div className="flex items-center gap-4">
          {profile.socials.github && <a href={profile.socials.github} aria-label="GitHub" className="hover:text-accent"><Github size={18}/></a>}
          {profile.socials.linkedin && <a href={profile.socials.linkedin} aria-label="LinkedIn" className="hover:text-accent"><Linkedin size={18}/></a>}
          {profile.socials.whatsapp && <a href={profile.socials.whatsapp} aria-label="WhatsApp" className="hover:text-accent"><Phone size={18}/></a>}
          {profile.socials.discord && <a href={profile.socials.discord} aria-label="Discord" className="hover:text-accent"><MessageSquare size={18}/></a>}
        </div>
      </div>
    </footer>
  )
}

