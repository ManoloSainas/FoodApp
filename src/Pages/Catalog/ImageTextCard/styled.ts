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
  width: ${({ $width }) => $width || 'max-content'};
  height: ${({ $height }) => $height || '125px'};
  border-radius: 40px;
  background-color: #26262f;
  padding: 15px;
  border-bottom: ${({ $isSelected }) => ($isSelected ? '1px solid red' : 'none')};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .card-image {
    width: 90px;
    height: 53px;
  }

  .card-text {
    height: max-content;
    text-align: center;
    color: ${({ $isSelected }) => ($isSelected ? 'white' : '#7E7E82')};
    margin-top: 15px;
  }
`
