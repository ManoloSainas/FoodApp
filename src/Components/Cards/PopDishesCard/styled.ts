import styled from 'styled-components'

export const StyledRow = styled.li<{}>`
  display: flex;
  align-items: center;
  background-color: #22222a;
  width: max-content;
  padding: 1% 1.5%;
  margin: 2%;
  gap: 20px;
  border-top-right-radius: 50px 50px;
  border-bottom-right-radius: 50px 50px;
  border-top-left-radius: 50px 50px;
  border-bottom-left-radius: 50px 50px;

  .image {
    width: 100px;
    height: 100px;
  }

  .text {
    color: #e6e5e8;
  }

  .textp {
    color: #58585c;
  }
`