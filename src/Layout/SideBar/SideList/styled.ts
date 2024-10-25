import styled from 'styled-components'

export const StyledRow = styled.li<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  width: 200px;
  gap: 20px;
  border-radius: 50px;
  margin: 20px 0px 0px 0px;
  background-color: ${({ $isSelected }) => ($isSelected ? '#F73E55' : 'initial')};

  #iconId {
    background-color: ${({ $isSelected }) => ($isSelected ? '#f00c2c' : '#272730')};
    border-radius: 100%;
    padding: 22px;
    color: white;
  }
`

export const StyledSideList = styled.ul`
  padding: 0%;
`
