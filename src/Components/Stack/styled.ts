import styled from 'styled-components'

export const StyledStack = styled.div<{
  $flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  $justifyContent?: string
  $alignItems?: string
  $height?: string
  $width?: string
  $backgroundColor?: string
  $gap?: string
  $flex?: number
  $padding?: string
  $margin?: string
  $borderRadius?: number
}>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  gap: ${({ $gap }) => $gap};
  flex: ${({ $flex }) => $flex};
  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
`
