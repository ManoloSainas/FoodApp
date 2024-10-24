import styled from 'styled-components'

export const StyledRow = styled.li`
  display: flex;
  align-items: center;
  background-color: #22222a;
  width: max-content;
  height: 200px;
  padding: 30px 30px 80px 30px;
  border-radius: 40px;
  margin-top: 70px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  .pop-dish-image {
    width: 130px;
    height: 130px;
    margin-top: -70px;
  }

  .pop-dish-image-drink {
    width: 65px;
    height: 130px;
    margin-top: -70px;
  }

  .pop-dish-text {
    color: #e6e5e8;
    padding: 0;
    font-size: 19px;
    margin-top: 5%;
  }

  .pop-dish-textp {
    color: #58585c;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    width: 190px;
    height: 90px;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 53px;
`
