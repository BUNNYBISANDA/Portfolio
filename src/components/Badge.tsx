import { ComponentProps } from 'react'

type Props = ComponentProps<'span'>

export default function Badge({ className = '', ...props }: Props) {
  return (
    <span
      className={
        'inline-flex items-center gap-1 rounded-full border border-black/10 dark:border-white/10 bg-card/70 px-3 py-1 text-sm text-fg/90 ' +
        'shadow-softer ' +
        className
      }
      {...props}
    />
  )
}

