import './App.css'
import { Input } from './Components/Form/Input'

function App() {
  // const [count, setCount] = useState(0);
  // useEffect
  // useCallback
  // useMemo

  return (
    <Input placeholder="Cerca..." type="text" onChange={(value) => console.log(value)} />
  )
}

export default App
