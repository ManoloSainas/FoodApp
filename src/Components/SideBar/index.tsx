import { useState } from 'react'
import { Icon } from '../Icon'
import { IconName } from '../Icon/config'
import { Text } from '../Text'
import { StyledRow } from './styled'

type Props = {
  options: { icon: IconName; text: string }[]
  onChange: (icon: IconName) => void
}

export const SideBar = ({ options, onChange }: Props) => {
  const [selectedRow, setSelectedRow] = useState<IconName>(options[0].icon)

  const handleClick = (icon: IconName) => {
    setSelectedRow(icon)
    onChange(icon)
  }

  return (
    <ul>
      {options.map(({ icon, text }) => (
        <StyledRow
          key={icon}
          onClick={() => handleClick(icon)}
          isSelected={selectedRow === icon}
        >
          <Icon iconName={icon} />
          <Text>{text}</Text>
        </StyledRow>
      ))}
    </ul>
  )
}
