import { Image } from '../Image'
import { Text } from '../Text'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  imageURL: string
}>

export const Avatar = ({ imageURL, children }: Props) => {
  return (
    <div>
      <Image height={60} width={60} imageURL={imageURL}></Image>
      <Text variant="h6">{children}</Text>
    </div>
  )
}
