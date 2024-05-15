import { PropsWithChildren, ReactElement } from 'react'
import { ButtonVariant, StyledButton } from './styled'
import { Icon } from '../Icon'

type ButtonChildren =
  | string
  | ReactElement<typeof Icon>
  | [string, ReactElement<typeof Icon>]

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  variant?: ButtonVariant
  children: ButtonChildren
}>

export const Button = ({ children, onClick, disabled, variant = 'primary' }: Props) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} $variant={variant}>
      {children}
    </StyledButton>
  )
}
