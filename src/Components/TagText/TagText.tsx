import { PropsWithChildren } from 'react'
import { Text } from '../Text/Text'

type Props = PropsWithChildren<{
  backgroundColor?: string
  borderRadius?: string
}>

export const TagText = ({
  children,
  backgroundColor = 'green',
  borderRadius = '20%'
}: Props) => {
  return (
    <div style={{ backgroundColor, borderRadius }}>
      <Text color="grey">{children}</Text>
    </div>
  )
}
