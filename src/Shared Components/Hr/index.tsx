import { StyledHr } from './styled'

type Props = {
  className?: string
}

export const Hr = ({ className }: Props) => {
  return <StyledHr className={className} />
}
