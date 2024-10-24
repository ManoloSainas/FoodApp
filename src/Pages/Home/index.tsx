import React from 'react'
import { StyledHome } from './styled'
import { Image } from '../../shared components/Image'
import { Stack } from '../../shared components/Stack'
import { Text } from '../../shared components/Text'

export const Home = () => {
  return (
    <StyledHome>
      <Stack
        backgroundColor="#17171C"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        margin="65px"
        padding="2%"
        borderRadius={25}
      >
        <Image
          className="flying-food"
          width={574}
          height={301}
          alt="FlyingFood"
          imageUrl="src\assets\Images\FlyingFood.jpg"
        />
        <Text color="#F74B23" variant="h1">
          Welcome Joseph Cheong!
        </Text>
        <Text color="#ffffff" variant="h2">
          I hope you're in the mood for something delicious today! ❤️
        </Text>
      </Stack>
    </StyledHome>
  )
}

const MemoizedHome = React.memo(Home)
export default MemoizedHome
