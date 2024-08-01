import { Stack } from '../../Components/Stack'
import { Text } from '../../Components/Text'
import { StyledHome } from './styled'

export const Home = () => {
  return (
    <StyledHome>
      <Stack
        backgroundColor="#17171C"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        margin="10%"
        padding="5%"
        borderRadius={25}
      >
        <Text color="#F00C2C" variant="h1">
          Welcome Joseph Cheong!
        </Text>
        <Text color="#ffffff" variant="h2">
          I hope you're in the mood for something delicious today! 😍❤️
        </Text>
      </Stack>
    </StyledHome>
  )
}
