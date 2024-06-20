import { useEffect, useState } from 'react'
import { Select } from '../../../../Components/Form/Select'
import { apiClient } from '../../../../../api-client'

export type Props = {
  updatePrice: React.Dispatch<React.SetStateAction<string | string[]>>
}

type FetchedProduct = {
  id: string
  name: string
  description: string
  available: true
  new: true
  stock: 0
  rating: 0
  delivery: string
  discountRate: 0
  price: {
    type: string
    value: 0
  }
  size: {
    type: string
    value: 0
  }
  tags: [string]
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
                  value: curr.price.value.toString(10),
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
