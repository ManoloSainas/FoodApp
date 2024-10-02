import { Button } from '../Button'
import { Image } from '../Image'
import { Price, symbols } from '../Price'
import { QuantitySelector } from '../QuantitySelector'
import { Stack } from '../Stack'
import { Text } from '../Text'

type Props = {
  text: string
  textp: string
  imgURL: string
  currency: keyof typeof symbols
  value: string
}

export const CatalogItem = ({ text, textp, imgURL, currency, value }: Props) => {
  return (
    <>
      <Stack flexDirection="column">
        <Stack>
          <Text fontWeight="bold" color="white" fontSize={50}>
            {text}
          </Text>
        </Stack>

        <Stack height="400px" gap="15px">
          <Stack
            flexDirection="column"
            justifyContent="space-between"
            height="90%"
            width="300px"
          >
            <Stack>
              <Text color="#404042" variant="h5">
                {textp}
              </Text>
            </Stack>

            <Stack flexDirection="column" gap="30px">
              <Stack alignItems="center" justifyContent="space-between" gap="35px">
                <Price fontSize={40} currency={currency} value={value} />
                <QuantitySelector product="" />
              </Stack>

              <Button paddingVar="button" onClick={() => console.log('clicked')}>
                Order Now
              </Button>
            </Stack>
          </Stack>

          <Stack height="100%" alignItems="center">
            <Image width={400} height={400} imageUrl={imgURL} />
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
