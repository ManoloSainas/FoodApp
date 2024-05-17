import './App.css'
import { WriteReview } from './Components/Cards/WriteReview'
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

      <WriteReview />
    </>
  )
}

export default App
