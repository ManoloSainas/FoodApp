import { ChangeEvent, useCallback } from 'react'
import { StyledTextArea } from './styled'
import React from 'react'

type Props = {
  onChange: (e: string) => void
  disabled?: boolean
  placeholder?: string
  value?: string
  height?: string
  width?: string
}

const TextArea = ({
  onChange,
  disabled,
  placeholder,
  value,
  height = '530px',
  width = '145px'
}: Props) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value)
    },
    [onChange]
  )

  return (
    <StyledTextArea
      onChange={handleChange}
      $height={height}
      $width={width}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
    />
  )
}

export default React.memo(TextArea)