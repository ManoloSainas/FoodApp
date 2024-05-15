import { ChangeEvent } from 'react'
import { StyledInput } from './styled'

type Props = {
  placeholder?: string
  value?: string
  onChange: (e: string) => void
  type: string
}

export const Input = ({ placeholder, value, onChange, type }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  return (
    <StyledInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}
