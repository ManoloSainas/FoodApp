import styled from 'styled-components'

export const StyledReview = styled.li`
  display: flex;
  list-style-type: none;
  flex-direction: column;
  background-color: #22222a;
  width: max-content;
  padding: 20px;
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
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    width: 190px;
    height: 90px;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`

export const StyledReviewList = styled.ul`
  display: flex;
  gap: 20px;
  padding: 0;
`
