import styled from 'styled-components'

export const StyledTextArea = styled.div<{}>`
  display: flex;
  background-color: #3b3b3b;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  width: max-content;
  padding: 2%;
  margin: 5%;
  border: none;

  & > textarea {
    font-style: italic;
    border: none;
    background-color: #3b3b3b;
  }
`
