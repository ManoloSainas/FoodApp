import styled from "styled-components";

export const StyledButton = styled.button<{
  $backgroundColor?: string;
  $borderRadius?: number;
}>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  outline: "none";
`;
