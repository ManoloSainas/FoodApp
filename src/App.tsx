import { useState } from 'react'
import './App.css'
import { ImageText } from './Components/Cards/ImageText'
import { Select } from './Components/Form/Select'
import { ToPay } from './Components/ToPay'
import { WriteReview } from './Components/Cards/WriteReview'
// import { Select } from './Components/Form/Select'

function App() {
  const [selectedValue, setSelectedValue] = useState<any>()
  // const [count, setCount] = useState(0);
  // useEffect
  // useCallback
  // useMemo
  return (
    <>
      <Select
        value={selectedValue}
        multiple={true}
        options={[
          { value: '1', label: 'Primo' },
          { value: '2', label: 'Secondo' },
          { value: '3', label: 'Terzo' }
        ]}
        onChange={(value) => setSelectedValue(value)}
      ></Select>

      <ToPay currency="Euro" value="700" />

      <ImageText
        height="100px"
        width="100px"
        text="premi"
        imageURL="src\assets\Images\food.jpg"
      />
    </>
  )
}

export default App
