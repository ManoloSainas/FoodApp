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
import { ImageRadio } from './Components/ImageRadio'
import { Stack } from './Components/Stack'
import { CardDetails } from './Components/CardDetails'

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

      <Stack>
        <ImageTextCard
          classImage="image"
          classText="text"
          onClick={() => console.log('selected!')}
          imageURL="src\assets\Images\kiwi.jpg"
          text="kiwi"
        />

        <ImageTextCard
          classImage="image"
          classText="text"
          onClick={() => console.log('selected!')}
          imageURL="src\assets\Images\fragola.jpg"
          text="Fragola"
        />
      </Stack>

      <ReviewCard
        reviewList={[
          {
            id: '1',
            title: 'Prima recensione',
            date: '10 November 2023',
            rev: 'Tutto ok'
          }
        ]}
      />

      <ShoppingCard
        onClick={() => console.log('Premuto!')}
        options={[
          {
            imageURL: 'src/assets/Images/kiwi.jpg',
            text: 'Primo',
            tagText: '10gr',
            currency: 'Dollar',
            value: '50'
          },
          {
            imageURL: 'src/assets/Images/mela.jpg',
            text: 'Secondo',
            tagText: '20gr',
            currency: 'Euro',
            value: '70'
          },
          {
            imageURL: 'src/assets/Images/fragola.jpg',
            text: 'Terzo',
            tagText: '30gr',
            currency: 'Yen',
            value: '30'
          }
        ]}
      />

      <RecommCard
        onClick={() => console.log('Premuto!')}
        options={[
          {
            iconName: 'Flame',
            imageURL: 'src/assets/Images/kiwi.jpg',
            text: 'Primo',
            textp: 'Primo prodotto',
            tagText: '10gr',
            currency: 'Dollar',
            value: '50',
            iconNameButton: 'Plus'
          },
          {
            iconName: 'Flame',
            imageURL: 'src/assets/Images/mela.jpg',
            text: 'Secondo',
            textp: 'Secondo prodotto',
            tagText: '20gr',
            currency: 'Euro',
            value: '70',
            iconNameButton: 'Plus'
          },
          {
            showIconInCorner: true,
            iconName: 'Flame',
            imageURL: 'src/assets/Images/fragola.jpg',
            text: 'Terzo',
            textp: 'Terzo prodotto',
            tagText: '30gr',
            currency: 'Yen',
            value: '30',
            iconNameButton: 'Plus'
          }
        ]}
      />

      <PopDishes
        onClick={() => console.log('Premuto!')}
        options={[
          {
            showIconInCorner: false,
            imageURL: 'src/assets/Images/kiwi.jpg',
            text: 'Primo',
            textp: 'Primo prodotto',
            tagText: '10gr',
            currency: 'Dollar',
            value: '50',

            iconName: 'Plus',
            IconNameButton: 'Plus'
          },
          {
            showIconInCorner: true,
            imageURL: 'src/assets/Images/mela.jpg',
            text: 'Secondo',
            textp: 'Secondo prodotto',
            tagText: '20gr',
            currency: 'Euro',
            value: '70',
            iconName: 'Plus',
            IconNameButton: 'Plus'
          },
          {
            showIconInCorner: true,
            imageURL: 'src/assets/Images/fragola.jpg',
            text: 'Terzo',
            textp: 'Terzo prodotto',
            tagText: '30gr',
            currency: 'Yen',
            value: '30',
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

      <ImageRadio
        onChange={(selectedCard) => console.log(selectedCard)}
        width="100px"
        height="100px"
        images={[
          'src/assets/Images/kiwi.jpg',
          'src/assets/Images/fragola.jpg',
          'src/assets/Images/mela.jpg'
        ]}
      />
      <Stack width="100%" height="100%" justifyContent="center">
        <CardDetails />
      </Stack>
    </>
  )
}

export default App
