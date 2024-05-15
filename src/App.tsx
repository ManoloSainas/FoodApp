import './App.css'
import { IconButton } from './Components/IconButton'
import { Price } from './Components/Price'
import { Select } from './Components/Form/Select'
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

      <TagText text="60gr" />

      <Select options={['primo', 'secondo']} onChange={(value) => console.log(value)} />
    </>
  )
}

export default App
