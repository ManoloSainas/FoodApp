import { PropsWithChildren } from "react";
import { ButtonVariant, StyledButton } from "./styled";


type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  variant?: ButtonVariant
}>;

export const Button = ({
  children,
  onClick,
  disabled,
  variant = "primary"
}: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
    >
      {children}
    </StyledButton>
  );
};
