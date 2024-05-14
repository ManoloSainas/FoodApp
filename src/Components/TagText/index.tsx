import { PropsWithChildren } from 'react'
import { Text } from '../Text'
import { Card } from '../Card'

type Props = PropsWithChildren<{
  backgroundColor?: string
  borderRadius?: number
}>

export const TagText = ({
  children,
  backgroundColor = '#202027',
  borderRadius = 20
}: Props) => {
  return (
    <Card backgroundColor={backgroundColor} borderRadius={borderRadius}>
      <Text color="grey">{children}</Text>
    </Card>
  )
}
