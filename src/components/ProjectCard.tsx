import { Github, ExternalLink } from 'lucide-react'
import Card from './Card'
import Badge from './Badge'
import { Project } from '@/data/content'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden hover:shadow-soft transition-shadow">
      <div className="aspect-video w-full bg-black/5 dark:bg-white/5">
        <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="p-5 md:p-6">
        <h3 className="type-h3" id={`project-${project.title}`}>{project.title}</h3>
        <p className="mt-2 text-muted type-body">{project.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map(t => (
            <Badge key={t} title={t}>{t}</Badge>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {project.links.github && (
            <a href={project.links.github} aria-label="GitHub" className="inline-flex items-center gap-2 text-fg hover:text-accent">
              <Github size={18}/> <span className="type-body">Code</span>
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} aria-label="Live" className="inline-flex items-center gap-2 text-fg hover:text-accent">
              <ExternalLink size={18}/> <span className="type-body">Live</span>
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}

