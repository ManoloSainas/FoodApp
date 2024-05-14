import { Icon } from '../Icon'
import { ButtonVariant } from '../Button/styled'
import { PropsWithChildren } from 'react'
import { IconName } from '../Icon/config'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  variant?: ButtonVariant
  iconName: IconName
  color?: string
  size?: FontAwesomeIconProps['size']
}>

export const IconButton = ({
  children,
  onClick,
  disabled,
  variant = 'primary',
  iconName,
  color,
  size
}: Props) => {
  return (
    <Button onClick={onClick} disabled={disabled} variant={variant}>
      {children}
      <Icon iconName={iconName} color={color} size={size}></Icon>
    </Button>
  )
}
