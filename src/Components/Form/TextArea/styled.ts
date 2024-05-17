import styled from 'styled-components'

export const StyledTextArea = styled.textarea<{ $height?: string; $width?: string }>`
  display: flex;
  background-color: #111114;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  margin: 5px;
  font-style: italic;
  color: #2e2e30;
  resize: none;
  width: ${({ $height }) => $height};
  height: ${({ $width }) => $width};
`
