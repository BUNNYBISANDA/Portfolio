import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center rounded-xl p-2 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

