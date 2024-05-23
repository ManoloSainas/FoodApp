import styled from 'styled-components'

export const StyledAvatar = styled.div<{}>`
  display: flex;
  flex-direction: column;
  .image {
    border-radius: 100%;
    height: 60px;
    width: 60px;
  }

  .text {
    width: 60px;
  }
`
