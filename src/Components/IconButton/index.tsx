import { Icon } from '../Icon'
import { ButtonVariant } from '../Button/styled'
import { IconName } from '../Icon/config'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'

type Props = {
  onClick: () => void
  disabled?: boolean
  variant?: ButtonVariant
  iconName: IconName
  color?: string
  size?: FontAwesomeIconProps['size']
}

export const IconButton = ({
  onClick,
  disabled,
  variant = 'primary',
  iconName,
  color,
  size
}: Props) => {
  return (
    <Button onClick={onClick} disabled={disabled} variant={variant}>
      {<Icon iconName={iconName} color={color} size={size}></Icon>}
    </Button>
  )
}

// creare styled per il div
