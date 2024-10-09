import styled from 'styled-components'

export const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 17% 83%;
  grid-template-rows: 100px max-content;
`

export const StyledHeader = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
`

export const StyledSideBar = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 3;
  padding-left: 30px;
`

export const StyledOutlet = styled.main`
  grid-column-start: 2;
  grid-row-start: 2;
`
