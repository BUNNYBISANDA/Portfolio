import Section from '@/components/Section'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import { content } from '@/data/content'

export default function About() {
  const { profile, stats } = content
  return (
    <Section id="about" title="About" subtitle="Get to know Bunny">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div>
          <p className="type-body text-muted max-w-prose">
            I’m {profile.nickname} ({profile.name}), an {profile.role.toLowerCase()} based in {profile.location}. I enjoy turning ideas into practical software and helping players grow through structured, injury-aware training.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {stats.map(s => <Badge key={s}>{s}</Badge>)}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Card className="p-5">
            <h3 className="type-h3">IT Student</h3>
            <p className="type-body text-muted mt-2">Interests: Python, JS/React, AWS basics, Power BI.</p>
            <ul className="mt-3 text-sm list-disc pl-5 text-fg/90">
              <li>Builds small tools and dashboards</li>
              <li>Practices clean code and Git</li>
              <li>Explores cloud fundamentals</li>
            </ul>
          </Card>
          <Card className="p-5">
            <h3 className="type-h3">Badminton Coach</h3>
            <p className="type-body text-muted mt-2">Junior/basic/private coaching with performance tracking.</p>
            <ul className="mt-3 text-sm list-disc pl-5 text-fg/90">
              <li>Footwork foundations and technique</li>
              <li>Tactical analysis and match prep</li>
              <li>Injury-aware load management</li>
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  )
}

