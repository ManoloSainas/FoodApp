import styled from 'styled-components'

export const StyledReview = styled.li<{}>`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: #22222a;
  width: max-content;
  padding: 2%;
  border-top-right-radius: 20px 20px;
  border-bottom-right-radius: 20px 20px;
  border-top-left-radius: 20px 20px;
  border-bottom-left-radius: 20px 20px;

  .title {
    color: #c8c8c9;
  }

  .date {
    color: #b83345;
  }

  .rev {
    color: #757579;
    font-style: italic;
  }
`
