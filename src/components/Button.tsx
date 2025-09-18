import { ComponentProps, forwardRef } from 'react'

type Props = ComponentProps<'button'> & { variant?: 'primary' | 'secondary' | 'ghost' }

const styles = {
  base: 'inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium transition-transform focus-visible:outline-none active:translate-y-[1px]',
  primary: 'bg-accent text-white shadow-soft hover:opacity-95',
  secondary: 'bg-card text-fg border border-black/10 dark:border-white/10 hover:shadow-soft',
  ghost: 'text-fg hover:bg-black/5 dark:hover:bg-white/5'
}

const Button = forwardRef<HTMLButtonElement, Props>(({ variant = 'primary', className = '', ...props }, ref) => {
  const classes = [styles.base, styles[variant], className].filter(Boolean).join(' ')
  return <button ref={ref} className={classes} {...props} />
})

export default Button
