import { useState } from 'react'
import './App.css'
import { ImageTextCard } from './Components/Cards/ImageTextCard'
import { Select } from './Components/Form/Select'
import { ReviewCard } from './Components/Cards/ReviewCard'
import { ShoppingCard } from './Components/Cards/ShoppingCard'
import { RecommCard } from './Components/Cards/RecommCard'
import { PopDishes } from './Components/Cards/PopDishesCard'
import { SideBar } from './Components/SideBar'
import { IconName } from './Components/Icon/config'

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

      <ImageTextCard
        classImage="image"
        classText="text"
        onClick={() => console.log('selected!')}
        imageURL="src\assets\Images\food.jpg"
        text="Frutta"
      />

      <ReviewCard
        reviewList={[
          {
            title: 'Prima recensione',
            date: '10 November 2023',
            rev: 'Tutto ok'
          }
        ]}
      />

      <ShoppingCard
        options={[
          {
            imageURL: 'src/assets/Images/food.jpg',
            text: 'Primo',
            tagText: '10gr',
            currency: 'Dollar',
            value: '50',
            onClick: () => console.log('Premuto!')
          },
          {
            imageURL: 'src/assets/Images/mela.jpg',
            text: 'Secondo',
            tagText: '20gr',
            currency: 'Euro',
            value: '70',
            onClick: () => console.log('Premuto!')
          },
          {
            imageURL: 'src/assets/Images/fragola.jpg',
            text: 'Terzo',
            tagText: '30gr',
            currency: 'Yen',
            value: '30',
            onClick: () => console.log('Premuto!')
          }
        ]}
      />

      <RecommCard
        options={[
          {
            imageURL: 'src/assets/Images/food.jpg',
            text: 'Primo',
            textp: 'Primo prodotto',
            tagText: '10gr',
            currency: 'Dollar',
            value: '50',
            onClick: () => console.log('Premuto!'),
            iconName: 'Plus'
          },
          {
            imageURL: 'src/assets/Images/mela.jpg',
            text: 'Secondo',
            textp: 'Secondo prodotto',
            tagText: '20gr',
            currency: 'Euro',
            value: '70',
            onClick: () => console.log('Premuto!'),
            iconName: 'Plus'
          },
          {
            imageURL: 'src/assets/Images/fragola.jpg',
            text: 'Terzo',
            textp: 'Terzo prodotto',
            tagText: '30gr',
            currency: 'Yen',
            value: '30',
            onClick: () => console.log('Premuto!'),
            iconName: 'Plus'
          }
        ]}
      />

      <PopDishes
        options={[
          {
            imageURL: 'src/assets/Images/food.jpg',
            text: 'Primo',
            textp: 'Primo prodotto',
            tagText: '10gr',
            currency: 'Dollar',
            value: '50',
            onClick: () => console.log('Premuto!'),
            iconName: 'Plus',
            IconNameButton: 'Plus'
          },
          {
            imageURL: 'src/assets/Images/mela.jpg',
            text: 'Secondo',
            textp: 'Secondo prodotto',
            tagText: '20gr',
            currency: 'Euro',
            value: '70',
            onClick: () => console.log('Premuto!'),
            iconName: 'Plus',
            IconNameButton: 'Plus'
          },
          {
            imageURL: 'src/assets/Images/fragola.jpg',
            text: 'Terzo',
            textp: 'Terzo prodotto',
            tagText: '30gr',
            currency: 'Yen',
            value: '30',
            onClick: () => console.log('Premuto!'),
            iconName: 'Plus',
            IconNameButton: 'Plus'
          }
        ]}
      />

      <SideBar
        onChange={(icon: IconName) => console.log(icon)}
        options={[
          { icon: 'Plus', text: 'Home' },
          { icon: 'Minus', text: 'Settings' }
        ]}
      />
    </>
  )
}

export default App
