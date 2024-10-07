import { PropsWithChildren } from 'react'
import { ButtonVariant, PaddingVariant, StyledButton } from './styled'
import { Icon } from '../Icon'

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  variant?: ButtonVariant
  paddingVar?: PaddingVariant
}>

export const Button = ({
  children,
  onClick,
  disabled,
  variant = 'primary',
  paddingVar = 'button'
}: Props) => {
  const buttonTitle = typeof children === 'string' || typeof Icon ? children : ''

  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      $paddingVar={paddingVar}
    >
      {buttonTitle}
    </StyledButton>
  )
}
