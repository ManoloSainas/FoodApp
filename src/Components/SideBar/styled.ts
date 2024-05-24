import styled from 'styled-components'

export const StyledRow = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 0.1% 2%;
  margin: 2%;
  gap: 20px;
  border-top-right-radius: 50px 50px;
  border-bottom-right-radius: 50px 50px;
  border-top-left-radius: 50px 50px;
  border-bottom-left-radius: 50px 50px;

  background-color: ${({ isSelected }) => (isSelected ? '#F73E55' : 'initial')};
`
