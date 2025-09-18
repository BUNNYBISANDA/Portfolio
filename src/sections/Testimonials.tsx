import Section from '@/components/Section'
import Card from '@/components/Card'
import { content } from '@/data/content'

export default function Testimonials() {
  const { testimonials } = content
  if (!testimonials?.length) return null
  return (
    <Section id="testimonials" title="Testimonials" subtitle="What People Say">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Card key={i} className="p-6">
            <blockquote className="type-body">“{t.quote}”</blockquote>
            <div className="mt-3 type-caption">— {t.author}{t.role ? `, ${t.role}` : ''}</div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

