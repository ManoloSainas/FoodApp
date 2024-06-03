import styled from 'styled-components'

export const StyledRow = styled.li<{}>`
  display: flex;
  align-items: center;
  background-color: #22222a;
  width: 210px;
  height: 300px;
  padding: 15px;

  gap: 20px;
  border-top-right-radius: 40px 40px;
  border-bottom-right-radius: 40px 40px;
  border-top-left-radius: 40px 40px;
  border-bottom-left-radius: 40px 40px;

  .image {
    width: 100px;
    height: 100px;
  }

  .text {
    color: #e6e5e8;
    padding: 0% 0% 0% 0%;
  }

  .textp {
    color: #58585c;
  }
`

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0%;
  gap: 62px;
`
