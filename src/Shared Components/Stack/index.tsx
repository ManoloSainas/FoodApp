import { PropsWithChildren } from 'react'
import { StyledStack } from './styled'

type Props = PropsWithChildren<{
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  justifyContent?: string
  alignItems?: string
  height?: string
  width?: string
  backgroundColor?: string
  gap?: string
  flex?: number
  padding?: string
  margin?: string
  border?: string
  borderRadius?: number
  flexWrap?: string
  id?: string
  position?: string
  top?: string
  right?: string
  left?: string
  bottom?: string
  transform?: string
  clickable?: boolean
  onClick?: () => void
}>

export const Stack = ({
  flexDirection = 'row',
  justifyContent = 'start',
  alignItems = 'start',
  borderRadius,
  children,
  height = 'max-content',
  width,
  backgroundColor,
  gap,
  flex,
  padding,
  margin,
  border,
  flexWrap,
  id,
  position,
  top,
  right,
  left,
  bottom,
  transform,
  clickable = false,
  onClick
}: Props) => {
  return (
    <StyledStack
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $borderRadius={borderRadius}
      $height={height}
      $width={width}
      $backgroundColor={backgroundColor}
      $gap={gap}
      $flex={flex}
      $padding={padding}
      $border={border}
      $margin={margin}
      $flexWrap={flexWrap}
      id={id}
      $position={position}
      $top={top}
      $right={right}
      $left={left}
      $bottom={bottom}
      $transform={transform}
      onClick={clickable ? onClick : undefined}
    >
      {children}
    </StyledStack>
  )
}
