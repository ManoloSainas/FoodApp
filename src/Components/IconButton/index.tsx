import { PropsWithChildren, useCallback, useState } from 'react'
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
    console.log('Button clicked. Current state:', buttonState)
    if (
      buttonState.variant === 'primary' &&
      (buttonState.iconName === 'Plus' || buttonState.iconName === 'Minus')
    ) {
      onClick()
      setButtonState({ variant: 'redIcon', iconName: 'Check' })
      console.log('State after setting to redIcon:', {
        variant: 'redIcon',
        iconName: 'Check'
      })

      setTimeout(() => {
        setButtonState({ variant: 'primary', iconName })
        console.log('State after timeout:', { variant: 'primary', iconName })
      }, 1000)
    } else {
      onClick()
    }
  }, [buttonState, onClick, iconName])

  return (
    <StyledIconButton>
      <Button
        hasIcon={true}
        onClick={handleClick}
        disabled={disabled}
        variant={buttonState.variant}
      >
        {children}
        <Icon iconName={buttonState.iconName} color={color} size={size} />
      </Button>
    </StyledIconButton>
  )
}
