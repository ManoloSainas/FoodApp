import styled from 'styled-components'

export const StyledImageRadio = styled.div<{
  $width?: string
  $height?: string
  $isSelected?: boolean
}>`
  display: flex;
  border-top-right-radius: 20px 20px;
  border-bottom-right-radius: 20px 20px;
  border-top-left-radius: 20px 20px;
  border-bottom-left-radius: 20px 20px;
  height: 100px;
  width: 150px;
  padding: 2%;
  border: ${({ $isSelected }) => ($isSelected ? '2px solid green' : '2px solid black')};
  justify-content: center;
  align-items: center;
  gap: 5px;

  .image {
    width: ${({ $height }) => $height};
    height: ${({ $width }) => $width};
  }
`
