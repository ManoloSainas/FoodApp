import './App.css'
import { IconButton } from './Components/IconButton/IconButton'
import { Stack } from './Components/Stack/Stack'

function App() {
  // const [count, setCount] = useState(0);
  // useEffect
  //useCallback
  // useMemo

  return (
    <Stack>
      <IconButton
        iconName="plus"
        size="7x"
        onClick={() => console.log('sono stato cliccato')}
      ></IconButton>
      <IconButton
        iconName="plus"
        size="7x"
        variant="outlined"
        onClick={() => console.log('sono stato cliccato')}
      ></IconButton>
      <IconButton
        iconName="plus"
        size="7x"
        variant="redIcon"
        onClick={() => console.log('sono stato cliccato')}
      ></IconButton>
      <IconButton
        iconName="plus"
        size="7x"
        variant="greyIcon"
        onClick={() => console.log('sono stato cliccato')}
      ></IconButton>
    </Stack>
  )
}

export default App
