import styled from 'styled-components'

export const StyledRow = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  width: 200px;
  margin: 2% 2% 10% 2%;
  gap: 20px;
  border-top-right-radius: 50px 50px;
  border-bottom-right-radius: 50px 50px;
  border-top-left-radius: 50px 50px;
  border-bottom-left-radius: 50px 50px;

  background-color: ${({ isSelected }) => (isSelected ? '#F73E55' : 'initial')};

  #iconId {
    background-color: ${({ isSelected }) => (isSelected ? '#f00c2c' : '#272730')};
    border-radius: 100%;
    padding: 22px;
    color: white;
  }
`