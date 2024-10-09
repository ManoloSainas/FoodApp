import styled from 'styled-components'

export const StyledReview = styled.li`
  display: flex;
  list-style-type: none;
  flex-direction: column;
  background-color: #22222a;
  width: max-content;
  padding: 5%;
  border-radius: 20px;
  gap: 10px;

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

export const StyledReviewList = styled.ul`
  display: flex;
  gap: 20px;
  padding: 0;
`
