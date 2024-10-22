import styled from 'styled-components'

export const StyledImage = styled.img<{ $width?: number; $height?: number }>`
  height: ${({ $height }) => $height}px;
  width: ${({ $width }) => $width}px;
`
