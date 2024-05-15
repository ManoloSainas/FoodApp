import { Text } from '../Text'

type Props = {
  value: number
  currency: keyof typeof symbols
}

export const Price = ({ value, currency }: Props) => {
  return (
    <div>
      <Text>{symbols[currency]}</Text>
      <Text>{value}</Text>
    </div>
  )
}

const symbols = {
  Dollar: '$',
  Euro: '€',
  PoundSterling: '£',
  Yen: '¥'
}
