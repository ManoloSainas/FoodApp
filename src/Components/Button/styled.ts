import styled from 'styled-components'

export type ButtonVariant = keyof typeof buttonVariants

export const StyledButton = styled.button<{
  $variant: ButtonVariant
}>`
  background-color: ${({ $variant }) => buttonVariants[$variant].backgroundColor};
  color: ${({ $variant }) => buttonVariants[$variant].color};
  border: ${({ $variant }) => buttonVariants[$variant].border};
  border-radius: 100px;
`

export const buttonVariants = {
  primary: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none'
  },

  outlined: {
    backgroundColor: '#00000000',
    color: 'white',
    border: 'solid 1px white'
  },

  redIcon: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none'
  },

  greyIcon: {
    backgroundColor: '#2D2E37',
    color: 'white',
    border: 'none'
  },

  transparent: {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none'
  }
}
