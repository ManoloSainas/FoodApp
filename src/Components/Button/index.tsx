import { PropsWithChildren } from 'react'
import { ButtonVariant, StyledButton } from './styled'
import { Icon } from '../Icon'

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  variant?: ButtonVariant
}>

export const Button = ({ children, onClick, disabled, variant = 'primary' }: Props) => {
  const buttonTitle = typeof children === 'string' || typeof { Icon } ? children : ''
  return (
    <StyledButton onClick={onClick} disabled={disabled} $variant={variant}>
      {buttonTitle}
    </StyledButton>
  )
}
