import './App.css'
import { Avatar } from './Components/Avatar/Avatar'
import { Stack } from './Components/Stack/Stack'
import { TagText } from './Components/TagText/TagText'

function App() {
  // const [count, setCount] = useState(0);
  // useEffect
  // useCallback
  // useMemo

  return (
    <Stack width="100%">
      <TagText>ciao</TagText>

      <Avatar imageURL="src\assets\Images\food.jpg"> Ciao mondo</Avatar>
    </Stack>
  )
}

export default App
