import './App.css'
import { IconButton } from './Components/IconButton'
import { Select } from './Components/Select'
import { TagText } from './Components/TagText'

function App() {
  // const [count, setCount] = useState(0);
  // useEffect
  // useCallback
  // useMemo

  return (
    <>
      <IconButton
        onClick={() => console.log('sono stato premuto')}
        iconName="angleBracket"
      >
        Premi qui
      </IconButton>

      <TagText text="60gr"></TagText>

      <Select onChange={(value) => console.log(value)}></Select>
    </>
  )
}

export default App
