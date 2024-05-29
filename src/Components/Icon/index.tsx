import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconName, iconsSet } from './config'

type Props = {
  iconName: IconName
  color?: string
  size?: FontAwesomeIconProps['size']
  id?: string
}

export const Icon = ({ iconName, color, size = 'sm', id }: Props) => {
  return <FontAwesomeIcon icon={iconsSet[iconName]} color={color} size={size} id={id} />
}
