import { Select } from '../../../../Components/Form/Select'

export const IngredientsSelect = () => {
  return (
    <Select
      onChange={(value) => console.log(value)}
      elements={[{ id: 'Ingredients', value: 'Ingredients', label: 'Ingredients' }]}
    />
  )
}
