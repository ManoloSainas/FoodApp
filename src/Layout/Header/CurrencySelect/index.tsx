import React, { useEffect, useState } from 'react'
import { Select } from '../../../Shared Components/Select'
import { apiClient } from '../../../features/api/api-client'
import { Text } from '../../../Shared Components/Text'
import { symbols } from '../../../constants'

export type Props = {
  updatePrice: (value: string | string[]) => void
}

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

export const CurrencySelect = ({ updatePrice }: Props) => {
  const [price, setPrice] = useState<{ id: string; value: string; label: string }[]>([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        setLoading(true)
        const deliveryValues: FetchedProduct[] = await apiClient.get('products')
        const newData = deliveryValues.reduce(
          (
            acc: {
              id: keyof typeof symbols
              value: string
              label: keyof typeof symbols
            }[],
            curr: FetchedProduct
          ) => {
            if (!acc.some((item) => item.label === curr.price.type)) {
              return [
                ...acc,
                {
                  id: curr.price.type,
                  value: curr.price.value,
                  label: curr.price.type
                }
              ]
            }
            return acc
          },
          []
        )
        setPrice([...price, ...newData])
      } catch (err) {
        console.error(`Error: ${err}`)
      } finally {
        setLoading(false)
      }
    }

    fetchPrice()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading)
    return (
      <Text variant="h1" color="red">
        Loading...
      </Text>
    )

  return <Select onChange={(value) => updatePrice(value)} elements={price} />
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(CurrencySelect)