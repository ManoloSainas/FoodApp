import { useState } from 'react'
import './App.css'
import { Select } from './Components/Form/Select'
import { ReviewCard } from './Components/Cards/ReviewCard'
import { ShoppingCard } from './Components/Cards/ShoppingCard'
import { RecommCard } from './Components/Cards/RecommCard'
import { PopDishes } from './Components/Cards/PopDishesCard'
import { SideBar } from './Components/SideBar'
import { IconName } from './Components/Icon/config'
import { Stack } from './Components/Stack'
import { CardDetails } from './Components/CardDetails'
import { ImageTextCard } from './Components/Cards/ImageTextCard'
import { Button } from './Components/Button'

function App() {
  const [selectedValue, setSelectedValue] = useState<any>()

  const handleClick = () => {
    console.log('Card clicked')
  }

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

      <Stack gap="10px" margin="10px">
        <ImageTextCard
          cards={[
            {
              imageURL: 'src/assets/Images/kiwi.jpg',
              text: 'Text 1',
              onClick: handleClick,
              classImage: 'image',
              classText: 'text'
            },
            {
              imageURL: 'src/assets/Images/mela.jpg',
              text: 'Text 2',
              onClick: handleClick,
              classImage: 'image',
              classText: 'text'
            }
          ]}
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

      <Stack width="100%" height="100%" justifyContent="center">
        <CardDetails
          images={['src/assets/Images/kiwi.jpg', 'src/assets/Images/fragola.jpg']}
        />
      </Stack>
    </>
  )
}

export default App
