import styled from 'styled-components'

export const StyledImageText = styled.div<{ $width?: string; $height?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: blue;
  width: max-content;
  & > * {
    width: ${({ $height }) => $height};
    height: ${({ $width }) => $width};
  }
`
