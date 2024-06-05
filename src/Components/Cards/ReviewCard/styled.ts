import styled from 'styled-components'

export const StyledReview = styled.li<{}>`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: #22222a;
  width: max-content;
  padding: 2%;
  border-radius: 20px;

  .review-title {
    color: #c8c8c9;
  }

  .review-date {
    color: #b83345;
  }

  .review-text {
    color: #757579;
    font-style: italic;
  }
`
