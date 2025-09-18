import Section from '@/components/Section'
import Badge from '@/components/Badge'
import { content } from '@/data/content'
import { Code2, Dumbbell } from 'lucide-react'

export default function Skills() {
  const { skills } = content
  return (
    <Section id="skills" title="Skills" subtitle="Tech & Coaching">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3"><Code2 size={18}/><h3 className="type-h3">Tech</h3></div>
          <div className="flex flex-wrap gap-2">
            {skills.tech.map(s => (
              <Badge key={s} title={s}>{s}</Badge>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3"><Dumbbell size={18}/><h3 className="type-h3">Coaching</h3></div>
          <div className="flex flex-wrap gap-2">
            {skills.coaching.map(s => (
              <Badge key={s} title={s}>{s}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

