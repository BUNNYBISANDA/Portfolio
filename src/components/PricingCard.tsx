import Card from './Card'
import Button from './Button'

export default function PricingCard({
  name,
  priceNote,
  features,
  ctaHref = '#'
}: {
  name: string
  priceNote: string
  features: string[]
  ctaHref?: string
}) {
  return (
    <Card className="p-6 flex flex-col h-full">
      <div className="flex-1">
        <h3 className="type-h3">{name}</h3>
        <p className="mt-1 text-muted">{priceNote}</p>
        <ul className="mt-4 space-y-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true"></span>
              <span className="type-body">{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <a href={ctaHref} target="_blank" rel="noreferrer">
          <Button className="w-full">Book via WhatsApp</Button>
        </a>
      </div>
    </Card>
  )
}

