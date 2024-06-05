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
  border: ${({ $isSelected }) => ($isSelected ? '2px solid green' : '2px solid black')};
  justify-content: center;
  align-items: center;
  gap: 5px;

  .radio-image {
    width: ${({ $height }) => $height};
    height: ${({ $width }) => $width};
  }
`
