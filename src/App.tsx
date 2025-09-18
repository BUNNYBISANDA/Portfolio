import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Coaching from './sections/Coaching'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import { observeActiveSections } from './lib/scroll'

export default function App() {
  const [active, setActive] = useState<string>('hero')

  useEffect(() => {
    const unobserve = observeActiveSections(['hero','about','skills','projects','coaching','contact'], setActive)
    return () => unobserve()
  }, [])

  const sections = useMemo(() => ([
    { id: 'hero', el: <Hero/> },
    { id: 'about', el: <About/> },
    { id: 'skills', el: <Skills/> },
    { id: 'projects', el: <Projects/> },
    { id: 'coaching', el: <Coaching/> },
    { id: 'testimonials', el: <Testimonials/> },
    { id: 'contact', el: <Contact/> },
  ]), [])

  return (
    <div>
      <Navbar active={active} />
      <main className="mx-auto max-w-6xl px-4 md:px-6">
        {sections.map(s => (
          <section id={s.id} key={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-24">
            {s.el}
          </section>
        ))}
      </main>
      <Footer />
    </div>
  )
}

