import { useState } from 'react'
import './App.css'
import { ImageText } from './Components/Cards/ImageText'
import { Select } from './Components/Form/Select'
import { Review } from './Components/Cards/Review'

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
      />

      <ImageText imageURL="src\assets\Images\food.jpg" text="Frutta" />

      <Review
        reviewList={[
          {
            title: 'Prima recensione',
            date: '10 November 2023',
            rev: 'Tutto ok'
          }
        ]}
      />
    </>
  )
}

export default App
