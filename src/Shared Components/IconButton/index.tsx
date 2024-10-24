import { PropsWithChildren } from 'react'
import { ButtonVariant } from '../Button/styled'
import { IconName } from '../Icon/config'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'
import { StyledIconButton } from './styled'
import { Icon } from '../Icon'

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  variant?: ButtonVariant
  iconName: IconName
  color?: string
  size?: FontAwesomeIconProps['size']
  id?: string
  paddingVar?: 'button' | 'review' | 'icon'
}>

export const IconButton = ({
  onClick,
  disabled,
  variant = 'primary',
  iconName,
  children,
  color,
  size,
  id,
  paddingVar
}: Props) => {
  return (
    <StyledIconButton>
      <Button
        onClick={onClick}
        disabled={disabled}
        variant={variant}
        paddingVar={paddingVar}
        ariaLabel={iconName}
      >
        {children}
        <Icon id={id} iconName={iconName} color={color} size={size} />
      </Button>
    </StyledIconButton>
  )
}
