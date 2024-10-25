import { useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { PopDishes, product } from '../PopDishesCard'
import { useDispatch } from 'react-redux'
import { Stack } from '../../../shared components/Stack'
import { TextContext } from '../../../Layout'
import { CurrencyContext } from '../../../Layout'
import { symbols } from '../../../constants'
import { conversionRates } from '../../../constants'
import { apiClient } from '../../../features/api/api-client'
import { IconName } from '../../../shared components/Icon/config'
import { convertValue } from '../../../utils/convertValues'
import { Text } from '../../../shared components/Text'
import { updateProductQuantity } from '../../../features/cart/reducer'

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
  currentSortPrice: string
}

export const CatalogPopDishBody = ({
  currentId,
  currentDelivery,
  currentSortPrice
}: Props) => {
  const [data, setData] = useState<product[]>([])
  const [loading, setLoading] = useState(false)

  const searchedText = useContext(TextContext)
  const selectedCurrency = useContext(CurrencyContext) as keyof typeof symbols

  const dispatch = useDispatch()

  const handleAddProduct = useCallback(
    (
      id: string,
      imageURL: string,
      text: string,
      tagText: string,
      currency: keyof typeof symbols,
      value: string,
      discountRate: number,
      delivery: string
    ) => {
      const productPayload = {
        id,
        imageURL,
        text,
        tagText,
        currency,
        value,
        discountRate,
        delivery
      }
      dispatch(updateProductQuantity({ product: productPayload, quantity: 1 }))
    },
    [dispatch]
  )

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true)
        const cards: FetchedProduct[] = await apiClient.get('products')
        const newData = cards.map((item: FetchedProduct) => ({
          id: item.id,
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
          iconNameButton: 'Plus' as IconName,
          rating: item.rating,
          discountRate: parseFloat(item.discountRate)
        }))
        setData(newData)
      } catch (err) {
        console.error(`Error fetching products: ${err}`)
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
          const deliveryMatch =
            typeof currentDelivery === 'string'
              ? element.delivery.includes(currentDelivery)
              : currentDelivery.some((delivery) => element.delivery.includes(delivery))

          return (
            tagMatch &&
            deliveryMatch &&
            element.text.toLowerCase().includes(searchedText.toLowerCase())
          )
        })
        .sort((a, b) => {
          return currentSortPrice === 'Ascending'
            ? parseFloat(
                convertValue(
                  { type: a.currency, value: a.value },
                  selectedCurrency,
                  conversionRates
                ) || '0'
              ) -
                parseFloat(
                  convertValue(
                    { type: b.currency, value: b.value },
                    selectedCurrency,
                    conversionRates
                  ) || '0'
                )
            : currentSortPrice === 'Descending'
            ? parseFloat(
                convertValue(
                  { type: b.currency, value: b.value },
                  selectedCurrency,
                  conversionRates
                ) || '0'
              ) -
              parseFloat(
                convertValue(
                  { type: a.currency, value: a.value },
                  selectedCurrency,
                  conversionRates
                ) || '0'
              )
            : 0
        }),
    [currentId, data, currentDelivery, searchedText, currentSortPrice, selectedCurrency]
  )

  if (loading) {
    return (
      <Text variant="h1" color="red">
        Loading...
      </Text>
    )
  }

  return (
    <Stack flexDirection="row">
      <PopDishes
        products={filteredData.length > 0 ? filteredData : []}
        onClick={(id, imageURL, text, tagText, currency, value, discountRate, delivery) =>
          handleAddProduct(
            id,
            imageURL,
            text,
            tagText,
            currency,
            value,
            discountRate,
            delivery
          )
        }
      />
    </Stack>
  )
}
