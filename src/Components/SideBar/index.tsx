import { useState } from 'react'
import { Icon } from '../Icon'
import { IconName } from '../Icon/config'
import { Text } from '../Text'
import { StyledRow } from './styled'
import { Stack } from '../Stack'

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
    <ul style={{ padding: 0 }}>
      {options.map(({ icon, text }) => (
        <StyledRow
          key={icon}
          onClick={() => handleClick(icon)}
          isSelected={selectedRow === icon}
        >
          <Stack width="75px">
            <Icon id="iconId" iconName={icon} />
          </Stack>

          <Text>{text}</Text>
        </StyledRow>
      ))}
    </ul>
  )
}
