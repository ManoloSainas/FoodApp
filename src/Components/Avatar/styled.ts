import styled from 'styled-components'

export const StyledAvatar = styled.div<{}>`
  display: flex;
  flex-direction: column;
  .image {
    border-radius: 100%;
    height: 90px;
    width: 90px;
  }

  .text {
    width: 90px;
    text-align: center;
  }
`
