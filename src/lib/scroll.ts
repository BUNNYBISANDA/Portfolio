export function smoothScrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function observeActiveSections(ids: string[], onActive: (id: string) => void) {
  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) onActive(e.target.id)
      })
    },
    {
      rootMargin: '-40% 0px -50% 0px', // top priority to section near top-middle
      threshold: [0, 0.25, 0.5, 1]
    }
  )

  ids.forEach(id => {
    const el = document.getElementById(id)
    if (el) obs.observe(el)
  })

  return () => obs.disconnect()
}

