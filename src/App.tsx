import './App.css'
import { QuantitySelector } from './Components/Form/QuantitySelector'
import { UnorderedList } from './Components/UnorderedList'

function App() {
  // const [count, setCount] = useState(0);
  // useEffect
  // useCallback
  // useMemo

  return (
    <>
      <QuantitySelector />

      <UnorderedList
        options={[
          { icon: 'plus', text: 'più' },
          { icon: 'minus', text: 'meno' }
        ]}
      />
    </>
  )
}

export default App
