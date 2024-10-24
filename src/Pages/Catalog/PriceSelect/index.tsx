import { Select } from '../../../shared components/Select'

const options = [
  { id: 'Price', value: 'Price', label: 'Sort Prices' },
  { id: 'Ascending', value: 'Ascending', label: 'Prices Ascending ↗' },
  { id: 'Descending', value: 'Descending', label: 'Prices Descending ↘' }
]

export type Props = {
  updateSortPrice: (value: string) => void
}

export const PriceSelect = ({ updateSortPrice }: Props) => {
  return (
    <Select
      arialLabel="price select"
      multiple={false}
      onChange={(value) => updateSortPrice(value)}
      elements={options}
    />
  )
}
