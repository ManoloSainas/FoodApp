import { Icon } from '../Icon'
import { IconName } from '../Icon/config'
import { Text } from '../Text'
import { StyledRow } from './styled'

type Props = {
  options: { icon: IconName; text: string }[]
}

export const UnorderedList = ({ options }: Props) => {
  return (
    <ul>
      {options.map(({ icon, text }) => (
        <StyledRow key={icon}>
          <Icon iconName={icon}></Icon>
          <Text>{text}</Text>
        </StyledRow>
      ))}

      {/* <StyledRow>
        <Icon iconName="plus"></Icon>
        <Text>Più</Text>
      </StyledRow> */}
    </ul>
  )
}
