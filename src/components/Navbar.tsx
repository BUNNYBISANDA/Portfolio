import ThemeToggle from './ThemeToggle'
import { smoothScrollTo } from '@/lib/scroll'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'coaching', label: 'Coaching' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ active }: { active: string }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <nav className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" onClick={(e) => { e.preventDefault(); smoothScrollTo('hero') }} className="font-mono font-semibold tracking-wide text-fg">BUNNY</a>
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => { e.preventDefault(); smoothScrollTo(l.id) }}
                className={
                  'px-1 py-1 type-body transition-colors ' +
                  (active === l.id ? 'text-accent' : 'text-fg/80 hover:text-fg')
                }
                aria-current={active === l.id ? 'page' : undefined}
              >{l.label}</a>
            ))}
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

