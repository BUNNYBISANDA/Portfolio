import Section from '@/components/Section'
import PricingCard from '@/components/PricingCard'
import { content } from '@/data/content'

export default function Coaching() {
  const wa = content.profile.socials.whatsapp || '#'
  return (
    <Section id="coaching" title="Coaching" subtitle="Programs & Availability">
      <p className="type-body text-muted max-w-prose">Availability: Bangkok, weekends and evenings. Message me to confirm court and time.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.coachingPlans.map(p => (
          <PricingCard key={p.name} name={p.name} priceNote={p.priceNote} features={p.features} ctaHref={wa} />
        ))}
      </div>
    </Section>
  )
}

