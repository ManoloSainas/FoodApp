import styled from 'styled-components'

export const StyledRow = styled.li<{}>`
  display: flex;
  align-items: center;
  background-color: #22222a;
  width: max-content;
  padding: 1% 1.5%;
  margin: 2%;
  gap: 20px;
  border-radius: 50px;

  .shopping-image {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }

  .shopping-text {
    color: #e6e5e8;
  }
`
