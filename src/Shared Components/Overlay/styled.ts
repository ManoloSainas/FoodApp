import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  backdrop-filter: blur(5px); /* Blur effect */
  z-index: 1000; /* Below the dialog */
  pointer-events: all; /* Make it intercept all pointer events */
`
