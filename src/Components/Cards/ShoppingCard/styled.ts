import styled from 'styled-components'

export const StyledRow = styled.li<{}>`
  display: flex;
  align-items: center;
  background-color: #22222a;
  margin-bottom: 3%;
  padding: 3%;
  gap: 20px;
  border-radius: 50px;
  width: 100%;

  .shopping-image {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }

  .shopping-text {
    color: #e6e5e8;
  }
`
export const StyledTable = styled.ul`
  width: 100%;
  padding: 0%;
`
