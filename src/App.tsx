import './App.css'
import { Select } from './Components/Form/Select'
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

      <Select
        multiple={true}
        options={[
          { value: '1', label: 'Primo' },
          { value: '2', label: 'Secondo' },
          { value: '3', label: 'Terzo' }
        ]}
        onChange={(value) => console.log(value)}
      ></Select>
    </>
  )
}

export default App
