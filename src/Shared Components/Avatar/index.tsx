import React from 'react'
import { Image } from '../Image'
import { Text } from '../Text'
import { StyledAvatar } from './styled'

type Props = {
  imageUrl: string
  text: string
}

const AvatarComponent = ({ imageUrl, text }: Props) => {
  return (
    <StyledAvatar>
      <Image className="avatar-image" imageUrl={imageUrl} />
      <Text className="avatar-text" variant="h4">
        {text}
      </Text>
    </StyledAvatar>
  )
}

export const Avatar = React.memo(AvatarComponent)
