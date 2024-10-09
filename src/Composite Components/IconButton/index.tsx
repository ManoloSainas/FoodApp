import { PropsWithChildren } from 'react'
import { ButtonVariant } from '../../Shared Components/Button/styled'
import { IconName } from '../../Shared Components/Icon/config'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { Button } from '../../Shared Components/Button'
import { StyledIconButton } from './styled'
import { Icon } from '../../Shared Components/Icon'

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  variant?: ButtonVariant
  iconName: IconName
  color?: string
  size?: FontAwesomeIconProps['size']
  id?: string
}>

export const IconButton = ({
  onClick,
  disabled,
  variant = 'primary',
  iconName,
  children,
  color,
  size,
  id
}: Props) => {
  return (
    <StyledIconButton>
      <Button onClick={onClick} disabled={disabled} variant={variant} paddingVar="review">
        {children}
        <Icon id={id} iconName={iconName} color={color} size={size} />
      </Button>
    </StyledIconButton>
  )
}
