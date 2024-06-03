import { useState } from 'react'
import { Icon } from '../Icon'
import { IconName } from '../Icon/config'
import { Text } from '../Text'
import { StyledRow, StyledSideList } from './styled'
import { Stack } from '../Stack'
import { Link } from 'react-router-dom'

type Props = {
  options: { icon: IconName; text: string }[]
  onChange: (icon: IconName) => void
}

export const SideList = ({ options, onChange }: Props) => {
  const [selectedRow, setSelectedRow] = useState<IconName>(options[0].icon)

  const handleClick = (icon: IconName) => {
    setSelectedRow(icon)
    onChange(icon)
  }

  return (
    <StyledSideList>
      {options.map(({ icon, text }) => (
        <Link to={`/${icon}`}>
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
        </Link>
      ))}
    </StyledSideList>
  )
}
