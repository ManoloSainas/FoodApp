import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconName, iconsSet } from './config'
import { useMemo } from 'react'

type Props = {
  iconName: IconName
  color?: string
  size?: FontAwesomeIconProps['size']
  id?: string
}

export const Icon = ({ iconName, color, size = 'sm', id }: Props) => {
  const icon = useMemo(() => iconsSet[iconName], [iconName])

  return <FontAwesomeIcon icon={icon} color={color} size={size} id={id} />
}
