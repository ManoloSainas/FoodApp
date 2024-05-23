import { PropsWithChildren } from 'react'
import { StyledText } from './styled'

export type Props = PropsWithChildren<{
  variant?: keyof typeof StyledText
  color?: string
  fontSize?: number
  fontStyle?: 'normal' | 'italic'
  className?: string
}>

export const Text = ({
  variant = 'p',
  children,
  color = 'black',
  fontSize,
  fontStyle,
  className
}: Props) => {
  const text =
    typeof children === 'string' || typeof children === 'number' ? children : ''
  const TextComponent: any = StyledText[variant] || StyledText.p

  return (
    <TextComponent
      className={className}
      color={color}
      fontSize={fontSize}
      fontStyle={fontStyle}
    >
      {text}
    </TextComponent>
  )
}
