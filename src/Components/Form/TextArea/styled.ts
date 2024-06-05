import styled from 'styled-components'

export const StyledTextArea = styled.textarea<{ $height?: string; $width?: string }>`
  display: flex;
  background-color: #111114;
  border-radius: 20px;
  margin: 5px;
  padding: 15px;
  font-style: italic;
  color: white;
  resize: none;
  width: ${({ $height }) => $height};
  height: ${({ $width }) => $width};
`
