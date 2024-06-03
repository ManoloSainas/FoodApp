import styled from 'styled-components'

export const StyledImageText = styled.div<{
  $width?: string
  $height?: string
  $isSelected: boolean
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: max-content;
  border-top-right-radius: 40px 40px;
  border-bottom-right-radius: 40px 40px;
  border-top-left-radius: 40px 40px;
  border-bottom-left-radius: 40px 40px;
  background-color: #26262f;
  padding: 15px;

  border-bottom: ${({ $isSelected }) => ($isSelected ? '1px solid red' : 'none')};

  .image {
    width: ${({ $height }) => $height};
    height: ${({ $width }) => $width};
  }

  .text {
    height: max-content;
    text-align: center;
    color: white;
    margin-top: 15px;
  }
`
