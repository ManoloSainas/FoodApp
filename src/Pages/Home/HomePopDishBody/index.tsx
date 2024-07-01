import { useContext, useEffect, useMemo, useState } from 'react'
import { PopDishes, product } from '../../../Components/Cards/PopDishesCard'
import { Stack } from '../../../Components/Stack'
import { apiClient } from '../../../../api-client'
import { symbols } from '../../../Components/Price'
import { IconName } from '../../../Components/Icon/config'
import { Text } from '../../../Components/Text'
import { CurrencyContext, TextContext } from '../../../Components/Layout/index'

type FetchedProduct = {
  id: string
  name: string
  description: string
  available: boolean
  new: boolean
  stock: string
  rating: string
  delivery: string
  discountRate: string
  price: {
    type: keyof typeof symbols
    value: string
  }
  size: {
    type: string
    value: string
  }
  tags: string[]
  imageUrl: string
}

export type Props = {
  currentId: string
  currentDelivery: string | string[]
}

export const HomePopDishBody = ({ currentId, currentDelivery }: Props) => {
  const [data, setData] = useState<product[]>([])
  const [loading, setLoading] = useState(false)

  const searchedText = useContext(TextContext)
  const selectedCurrency = useContext(CurrencyContext)

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true)
        const cards: FetchedProduct[] = await apiClient.get('products')
        const newData = cards.map((item: FetchedProduct) => ({
          imageURL: item.imageUrl,
          text: item.name,
          textp: item.description,
          tagText: item.size.value + item.size.type,
          currency: item.price.type,
          value: item.price.value,
          available: item.available,
          tags: item.tags,
          delivery: item.delivery,
          price: item.price,
          iconNameOptional: 'Flame' as IconName,
          iconNameButton: 'Plus' as IconName
        }))
        setData(newData)
      } catch (err) {
        console.error(`Error: ${err}`)
      } finally {
        setLoading(false)
      }
    }

    fetchCards()
  }, [])

  const filteredData = useMemo(
    () =>
      data
        .filter((element: product) => {
          const tagMatch = element.tags.includes(currentId) || currentId === 'All'

          let deliveryMatch = false

          deliveryMatch =
            typeof currentDelivery === 'string'
              ? element.delivery.includes(currentDelivery)
              : currentDelivery.some((delivery) => element.delivery.includes(delivery))

          return (
            tagMatch &&
            deliveryMatch &&
            element.text.toLowerCase().includes(searchedText.toLowerCase())
          )
        })
        .map((element: product) => ({
          ...element,
          value: convertValue(element.price),
          currency: selectedCurrency
        })),
    [currentId, data, currentDelivery, selectedCurrency, searchedText]
  )

  function convertValue(price: { type: keyof typeof symbols; value: string }) {
    let numericValue = Number(price.value)
    switch (selectedCurrency) {
      case 'EUR': {
        if (price.type === 'EUR') {
          return numericValue
        } else if (price.type === 'JPY') {
          return (numericValue * 0.0058).toFixed(2)
        } else return (numericValue * 0.931808).toFixed(2)
      }
      case 'JPY': {
        if (price.type === 'JPY') {
          return numericValue
        } else if (price.type === 'EUR') {
          return (numericValue * 173.253).toFixed(2)
        } else return (numericValue * 161.438).toFixed(2)
      }
      default: {
        if (price.type === 'USD') {
          return numericValue
        } else if (price.type === 'JPY') {
          return (numericValue * 0.0062).toFixed(2)
        } else return (numericValue * 1.0732).toFixed(2)
      }
    }
  }

  if (loading)
    return (
      <Text variant="h1" color="red">
        Loading...
      </Text>
    )

  return (
    <Stack flexDirection="row">
      <PopDishes
        products={filteredData.length > 0 ? filteredData : []}
        onClick={() => console.log('Clicked!')}
      ></PopDishes>
    </Stack>
  )
}
