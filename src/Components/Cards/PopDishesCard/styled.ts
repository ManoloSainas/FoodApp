import styled from 'styled-components'

export const StyledRow = styled.li<{}>`
  display: flex;
  align-items: center;
  background-color: #22222a;
  width: 180px;
  height: 280px;
  padding: 30px;
  border-radius: 40px;

  .pop-dish-image {
    width: 150px;
    height: 150px;
  }

  .pop-dish-text {
    color: #e6e5e8;
    padding: 0%;
    margin-top: 5%;
  }

  .pop-dish-textp {
    color: #58585c;
    overflow: hidden;
    width: 180px;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0%;
  gap: 65px;
`
