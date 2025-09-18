import { ComponentProps } from 'react'

export default function Card({ className = '', ...props }: ComponentProps<'div'>) {
  return <div className={'card ' + className} {...props} />
}

