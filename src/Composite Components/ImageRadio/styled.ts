import styled from 'styled-components'

export const StyledImageRadio = styled.div<{
  $width?: string
  $height?: string
  $isSelected?: boolean
}>`
  display: flex;
  border-radius: 20px;
  height: 100px;
  width: 150px;
  padding: 2%;
  border: ${({ $isSelected }) =>
    $isSelected ? '2px solid #113420' : '2px solid #29282D'};
  justify-content: center;
  align-items: center;
  gap: 10px;

  .radio-image {
    width: ${({ $height }) => $height};
    height: ${({ $width }) => $width};
  }
`
