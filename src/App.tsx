import './App.css'
import { TextArea } from './Components/Form/TextArea'
// import { Select } from './Components/Form/Select'

function App() {
  // const [count, setCount] = useState(0);
  // useEffect
  // useCallback
  // useMemo
  return (
    <>
      {/* <Select
        multiple={true}
        options={['Primo', 'Secondo', 'Terzo']}
        onChange={(value) => console.log(value)}
      ></Select> */}

      <TextArea onChange={(value) => console.log(value)} />
    </>
  )
}

export default App
