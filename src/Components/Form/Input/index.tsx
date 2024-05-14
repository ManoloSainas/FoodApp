import { ChangeEvent } from 'react'

type Props = {
  placeholder?: string
  value?: string
  onChange: (e: string) => void
}

export const Input = ({ placeholder, value, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  return (
    <input type="text" value={value} placeholder={placeholder} onChange={handleChange} />
  )
}
