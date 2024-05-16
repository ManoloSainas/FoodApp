import styled from 'styled-components'
import { Props } from '.'

export const StyledText = {
  h1: styled.h1<Props>`
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize}px;
    font-style: ${({ fontStyle }) => fontStyle};
  `,
  h2: styled.h2<Props>`
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize}px;
    font-style: ${({ fontStyle }) => fontStyle};
  `,
  h3: styled.h3<Props>`
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize}px;
    font-style: ${({ fontStyle }) => fontStyle};
  `,
  h4: styled.h4<Props>`
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize}px;
    font-style: ${({ fontStyle }) => fontStyle};
  `,
  h5: styled.h5<Props>`
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize}px;
    font-style: ${({ fontStyle }) => fontStyle};
  `,
  h6: styled.h6<Props>`
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize}px;
    font-style: ${({ fontStyle }) => fontStyle};
  `,
  p: styled.p<Props>`
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize}px;
    font-style: ${({ fontStyle }) => fontStyle};
  `,
  span: styled.span<Props>`
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize}px;
    font-style: ${({ fontStyle }) => fontStyle};
  `
}
