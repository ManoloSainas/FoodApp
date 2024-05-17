import { Icon } from '../Icon'
import { IconName } from '../Icon/config'
import { Text } from '../Text'
import { StyledRow } from './styled'

type Props = {
  options: { icon: IconName; text: string }[]
}

export const SideBar = ({ options }: Props) => {
  return (
    <ul>
      {options.map(({ icon, text }) => (
        <StyledRow key={icon}>
          <Icon iconName={icon} />
          <Text>{text}</Text>
        </StyledRow>
      ))}
    </ul>
  )
}
