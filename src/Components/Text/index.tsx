import { PropsWithChildren, createElement } from 'react'

type Props = PropsWithChildren<{
  variant?: keyof typeof textTypes
  color?: string
  backgroundColor?: string
  fontSize?: number
  fontStyle?: 'normal' | 'italic'
  margin?: number
}>

export const Text = ({
  variant = 'p',
  color = 'white',
  backgroundColor,
  fontSize,
  fontStyle,
  margin,
  children
}: Props) => {
  const TextComponent = textTypes[variant]
  return createElement(
    TextComponent,
    {
      style: getTextStyle({
        color,
        backgroundColor,
        margin,
        fontSize,
        fontStyle
      })
    },
    children
  )
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

const getTextStyle = ({
  color,
  backgroundColor,
  fontSize,
  fontStyle,
  margin
}: Props) => ({
  display: 'flex',
  color,
  margin,
  backgroundColor,
  fontSize: `${fontSize}px`,
  fontStyle
})

// creare styled per il div
