import { PropsWithChildren } from 'react'
import { getTextComponent } from './styled'

export type Props = PropsWithChildren<{
  variant?: keyof typeof textTypes
  color?: string
  fontSize?: number
  fontStyle?: 'normal' | 'italic'
}>

export const Text = ({ variant = 'p', children, color }: Props) => {
  const text = typeof children === 'string' ? children : ''
  const TextComponent = getTextComponent(variant)
  return <TextComponent color={color}>{text}</TextComponent>
}

const textTypes = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span'
}
