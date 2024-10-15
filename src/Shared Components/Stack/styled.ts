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
  $border?: string
  $borderRadius?: number
  $flexWrap?: string
  id?: string
  $position?: string
  $top?: string
  $bottom?: string
  $right?: string
  $left?: string
  $transform?: string
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
  border: ${({ $border }) => $border};
  margin: ${({ $margin }) => $margin};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  position: ${({ $position }) => $position};
  top: ${({ $top }) => $top};
  bottom: ${({ $bottom }) => $bottom};
  right: ${({ $right }) => $right};
  left: ${({ $left }) => $left};
  transform: ${({ $transform }) => $transform};
`
