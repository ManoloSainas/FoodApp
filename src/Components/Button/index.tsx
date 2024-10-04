import { PropsWithChildren, useCallback, useState } from 'react'
import { ButtonVariant, PaddingVariant, StyledButton } from './styled'

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  hasIcon?: boolean
  variant?: ButtonVariant
  paddingVar?: PaddingVariant
}>

export const Button = ({
  children,
  onClick,
  disabled,
  hasIcon = false,
  variant = 'primary',
  paddingVar = 'icon'
}: Props) => {
  const [buttonState, setButtonState] = useState({ variant, children })

  const handleClick = useCallback(() => {
    if (
      hasIcon === false &&
      buttonState.variant === 'primary' &&
      buttonState.children === 'Order Now'
    ) {
      onClick()

      setButtonState({ variant: 'redIcon', children: 'Added to Cart' })

      setTimeout(() => {
        setButtonState({ variant: 'primary', children: 'Order Now' })
      }, 1000)
    } else {
      onClick()
    }
  }, [buttonState, onClick])

  const buttonTitle = typeof children === 'string' ? buttonState.children : children
  return (
    <StyledButton
      hasIcon={hasIcon}
      onClick={handleClick}
      disabled={disabled}
      $variant={buttonState.variant}
      $paddingVar={paddingVar}
    >
      {buttonTitle}
    </StyledButton>
  )
}
