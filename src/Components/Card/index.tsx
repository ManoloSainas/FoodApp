import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  backgroundColor?: string
  borderRadius?: number
  padding?: string
}>

export const Card = ({
  backgroundColor = '#171C31',
  borderRadius = 15,
  padding,
  children
}: Props) => {
  return (
    <div style={getTextStyle({ backgroundColor, borderRadius, padding })}>{children}</div>
  )
}

const getTextStyle = ({ backgroundColor, borderRadius, padding }: Props) => ({
  display: 'flex',
  backgroundColor,
  padding,
  borderRadius: `${borderRadius}px`,
  height: '100%',
  width: '100%',
  flex: 1
})
