import { ChangeEvent } from 'react'

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
    <input type={type} value={value} placeholder={placeholder} onChange={handleChange} />
  )
}
// creare lo styled
