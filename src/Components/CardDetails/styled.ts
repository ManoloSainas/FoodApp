import styled from 'styled-components'

export const StyledCardDetails = styled.div<{}>`
  display: flex;
  gap: '50px';
  flex-direction: column;

  .name-surname,
  .card-number,
  .cvv {
    border-bottom: ridge 2px;
  }
`
