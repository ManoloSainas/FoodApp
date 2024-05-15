import styled from 'styled-components'

export const StyledAvatar = styled.div<{}>`
  display: flex;
  flex-direction: column;
  & > img {
    border-radius: 100%;
    height: 60px;
    width: 60px;
  }

  & > h4 {
    width: 60px;
  }
`
