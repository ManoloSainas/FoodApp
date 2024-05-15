import styled from 'styled-components'

export const StyledAvatar = styled.div<{}>`
  display: flex;
  flex-direction: column;
  & > Image {
    border-radius: 100%;
    height: 60%;
    width: 60%;
  }
`
