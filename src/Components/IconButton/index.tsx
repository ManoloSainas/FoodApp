import { Icon } from '../Icon'
import { ButtonVariant } from '../Button/styled'
import { IconName } from '../Icon/config'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'
import { StyledIconButton } from './styled'
import { PropsWithChildren, useCallback, useState } from 'react'

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
  const [buttonState, setButtonState] = useState({ variant, iconName })

  const handleClick = useCallback(() => {
    if (buttonState.variant === 'primary' && buttonState.iconName === 'Plus') {
      onClick()
      setButtonState({ variant: 'redIcon', iconName: 'Check' })

      setTimeout(() => {
        setButtonState({ variant: 'primary', iconName: 'Plus' })
      }, 2000)
    }
  }, [buttonState, onClick])

  return (
    <StyledIconButton>
      <Button onClick={handleClick} disabled={disabled} variant={buttonState.variant}>
        {children}
        <Icon iconName={buttonState.iconName} color={color} size={size} />
      </Button>
    </StyledIconButton>
  )
}
