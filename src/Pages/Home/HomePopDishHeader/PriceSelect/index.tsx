import { Select } from '../../../../Components/Form/Select'

const options = [
  { id: 'Price', value: 'Price', label: 'Sort Prices' },
  { id: 'Ascending', value: 'Ascending', label: 'Prices Ascending' },
  { id: 'Descending', value: 'Descending', label: 'Prices Descending' }
]

export const PriceSelect = () => {
  return <Select onChange={(value) => console.log(value)} elements={options} />
}
