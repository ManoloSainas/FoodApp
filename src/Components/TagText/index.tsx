import { PropsWithChildren } from 'react'
import { Text } from '../Text'

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
    <div background-color={backgroundColor} border-radius={borderRadius}>
      <Text color="grey">{children}</Text>
    </div>
  )
}

// creare styled per il div
