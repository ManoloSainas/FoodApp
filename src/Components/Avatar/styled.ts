import styled from 'styled-components'

export const StyledAvatar = styled.div<{}>`
  display: flex;
  flex-direction: column;
  .image {
    border-radius: 100%;
    height: 100px;
    width: 100px;
  }

  .text {
    width: 100px;
    text-align: center;
  }
`
