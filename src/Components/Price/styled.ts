import styled from 'styled-components'

export const StyledPrice = styled.div<{ fontSize?: number }>`
  display: flex;

  .price-text {
    color: white;
    font-size: ${({ fontSize }) => fontSize};
  }
`
