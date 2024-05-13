import { PropsWithChildren } from "react";
import { StyledButton } from "./styled";

type Props = PropsWithChildren<{
  backgroundColor?: string;
  borderRadius?: number;
}>;

export const Button = ({
  children,
  backgroundColor,
  borderRadius,
}: Props) => {
  return (
    <StyledButton
      $borderRadius={borderRadius}
      $backgroundColor={backgroundColor}
    >
      {children}
    </StyledButton>
  );
};
