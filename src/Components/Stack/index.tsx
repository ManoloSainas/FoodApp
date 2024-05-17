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
  borderRadius?: number
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
  margin
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
      $margin={margin}
    >
      {children}
    </StyledStack>
  )
}
