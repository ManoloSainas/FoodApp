import { useEffect, useState } from 'react'
import { Select } from '../../../../Components/Form/Select'
import { apiClient } from '../../../../../api-client'
import { symbols } from '../../../../Components/Price'

export type Props = {
  updatePrice: React.Dispatch<React.SetStateAction<string | string[]>>
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

export const PriceSelect = ({ updatePrice }: Props) => {
  const [price, setPrice] = useState<{ id: string; value: string; label: string }[]>([
    { id: '', value: '', label: 'Price' }
  ])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        setLoading(true)
        const deliveryValues = await apiClient.get('products')
        const newData = deliveryValues.reduce(
          (acc: { value: string; label: string }[], curr: FetchedProduct) => {
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
  }, [])

  return <Select onChange={(value) => updatePrice(value)} elements={price} />
}
