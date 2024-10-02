import { Button } from '../Button'
import { Image } from '../Image'
import { Price, symbols } from '../Price'
import { QuantitySelector } from '../QuantitySelector'
import { Stack } from '../Stack'
import { Text } from '../Text'

type Props = {
  text: string
  textp: string
  imageURL: string
  currency: keyof typeof symbols
  value: string
}

export const CatalogItem = ({ text, textp, imageURL, currency, value }: Props) => {
  return (
    <>
      <Stack flexDirection="column">
        <Text>{text}</Text>
        <Text>{textp}</Text>
        <Stack>
          <Price currency={currency} value={value} />
          <QuantitySelector product="" />
        </Stack>
        <Button onClick={() => console.log('clicked')}>Order Now</Button>
      </Stack>
      <Stack>
        <Image imageUrl={imageURL} />
      </Stack>
    </>
  )
}
