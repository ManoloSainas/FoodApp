import styled, { Styled } from 'styled-components'
import { Props } from '.'
const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p'] as const
type Variant = (typeof variants)[number]

// export const StyledText = {
//   h1: styled.h1<Props>`
//     color: ${({ color }) => color};
//     font-size: ${({ fontSize }) => fontSize}px;
//     font-style: ${({ fontStyle }) => fontStyle};
//   `,
//   h2: styled.h2<Props>`
//     color: ${({ color }) => color};
//     font-size: ${({ fontSize }) => fontSize}px;
//     font-style: ${({ fontStyle }) => fontStyle};
//   `,

//Styled<"web", string, BaseObject, BaseObject>
export const StyledText = variants.reduce(
  (acc, variant) => ({
    ...acc,
    [variant]: styled(variant)<Props>`
      color: ${({ color }) => color};
      font-size: ${({ fontSize }) => fontSize}px;
      font-style: ${({ fontStyle }) => fontStyle};
      font-weight: ${({ fontWeight }) => fontWeight};
      margin: 5px 0px 5px 0px;
    `
  }),
  {} as Record<Variant, Styled>
)
