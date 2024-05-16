import { PropsWithChildren } from 'react'
import { StyledTextArea } from './styled'

type Props = PropsWithChildren<{}>

export const TextArea = ({ children }: Props) => {
  return (
    <StyledTextArea>
      <textarea
        placeholder="Tell us what you liked or disliked about this product..."
        rows={7}
        cols={50}
      >
        {children}
      </textarea>
    </StyledTextArea>
  )
}
