import { HTMLAttributes, PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Props = PropsWithChildren<{
  title?: string
  id?: string
  subtitle?: string
}> & HTMLAttributes<HTMLDivElement>

export default function Section({ title, subtitle, className = '', children, ...rest }: Props) {
  const prefersReduced = useReducedMotion()
  return (
    <div className={"py-14 md:py-20 " + className} {...rest}>
      {(title || subtitle) && (
        <div className="mb-8 md:mb-10">
          {subtitle && <p className="type-caption uppercase tracking-wide">{subtitle}</p>}
          {title && <h2 className="type-h2 mt-1" id={rest.id ? `${rest.id}-title` : undefined}>{title}</h2>}
        </div>
      )}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 12 }}
        whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

