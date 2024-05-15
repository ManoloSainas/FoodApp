import styled from 'styled-components'
import { Props } from '.'
export const getTextComponent = (variant: string) => styled(variant)<Props>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
`
