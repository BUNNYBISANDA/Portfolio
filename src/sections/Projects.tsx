import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import { content } from '@/data/content'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected Work">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.projects.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </Section>
  )
}

