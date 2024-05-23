import { Icon } from '../Icon'
import { ButtonVariant } from '../Button/styled'
import { IconName } from '../Icon/config'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'
import { StyledIconButton } from './styled'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  variant?: ButtonVariant
  iconName: IconName
  color?: string
  size?: FontAwesomeIconProps['size']
}>

export const IconButton = ({
  onClick,
  disabled,
  variant = 'primary',
  iconName,
  children,
  color,
  size
}: Props) => {
  return (
    <StyledIconButton>
      <Button onClick={onClick} disabled={disabled} variant={variant}>
        {children}
        <Icon iconName={iconName} color={color} size={size} />
      </Button>
    </StyledIconButton>
  )
}
