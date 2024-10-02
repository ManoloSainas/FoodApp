import styled from 'styled-components'

export type ButtonVariant = keyof typeof buttonVariants
export type PaddingVariant = keyof typeof paddingVariants

export const StyledButton = styled.button<{
  $variant: ButtonVariant
  $paddingVar: PaddingVariant
}>`
  background-color: ${({ $variant }) => buttonVariants[$variant].backgroundColor};
  color: ${({ $variant }) => buttonVariants[$variant].color};
  border: ${({ $variant }) => buttonVariants[$variant].border};
  border-color: ${({ $variant }) => buttonVariants[$variant].borderColor};
  padding: ${({ $paddingVar }) => paddingVariants[$paddingVar].padding};
  border-radius: 200px;
`

export const paddingVariants = {
  icon: {
    padding: '5px 10px 5px 10px'
  },

  button: {
    padding: '12px 40px 12px 40px'
  }
}

export const buttonVariants = {
  primary: {
    backgroundColor: '#14C458',
    color: 'white',
    border: 'none',
    borderColor: 'transparent'
  },

  outlined: {
    backgroundColor: '#00000000',
    color: 'white',
    border: 'solid 1px white',
    borderColor: 'transparent'
  },

  redIcon: {
    backgroundColor: '#6E1322',
    color: 'white',
    border: 'none',
    borderColor: 'transparent'
  },

  greyIcon: {
    backgroundColor: '#2D2E37',
    color: 'white',
    border: 'none',
    borderColor: 'transparent'
  },

  transparent: {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    borderColor: 'transparent'
  },

  leaveReview: {
    backgroundColor: '#113421',
    color: 'white',
    border: 'solid 2px',
    borderColor: '#137139'
  }
}
