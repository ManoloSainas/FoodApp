import { Image } from '../Image/Image'
import { Text } from '../Text/Text'
import { Stack } from '../Stack/Stack'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  imageURL: string
}>

export const Avatar = ({ imageURL, children }: Props) => {
  return (
    <Stack flexDirection="column">
      <Image height={60} width={60} imageURL={imageURL}></Image>
      <Text variant="h6">{children}</Text>
    </Stack>
  )
}
