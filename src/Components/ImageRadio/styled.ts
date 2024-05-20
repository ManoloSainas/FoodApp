import styled from 'styled-components'

export const StyledImageRadio = styled.div<{ $width?: string; $height?: string }>`
  display: flex;
  align-items: center;
  height: max-content;
  width: max-content;
  border-top-right-radius: 20px 20px;
  border-bottom-right-radius: 20px 20px;
  border-top-left-radius: 20px 20px;
  border-bottom-left-radius: 20px 20px;
  padding: 15px;
  background-color: #100f14;
  gap: 10px;
  border: solid 4px;
  border-color: grey;

  & > img {
    width: ${({ $height }) => $height};
    height: ${({ $width }) => $width};
  }
`
