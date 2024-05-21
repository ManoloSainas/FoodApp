import styled from 'styled-components'

export const StyledTag = styled.div<{}>`
  background-color: #151419;
  border-top-right-radius: 50px 50px;
  border-bottom-right-radius: 50px 50px;
  border-top-left-radius: 50px 50px;
  border-bottom-left-radius: 50px 50px;
  padding: 1px 30px;
  width: max-content;
  & > p {
    color: grey;
  }
`

// allargare un pò il div
