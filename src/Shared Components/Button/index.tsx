import React, { PropsWithChildren, useCallback } from 'react'
import { ButtonVariant, PaddingVariant, StyledButton } from './styled'
import { Icon } from '../Icon'

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  variant?: ButtonVariant
  paddingVar?: PaddingVariant
  ariaLabel?: string
}>

// Bottone semplice
const ButtonComponent = ({
  children,
  onClick,
  disabled,
  variant = 'primary',
  paddingVar = 'button',
  ariaLabel
}: Props) => {
  const memoizedOnClick = useCallback(onClick, [onClick])
  const buttonTitle = typeof children === 'string' || typeof Icon ? children : ''

  return (
    <StyledButton
      onClick={memoizedOnClick}
      disabled={disabled}
      $variant={variant}
      $paddingVar={paddingVar}
      aria-label={ariaLabel}
    >
      {buttonTitle}
    </StyledButton>
  )
}

export const Button = React.memo(ButtonComponent)
