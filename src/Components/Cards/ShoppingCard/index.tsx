import { QuantitySelector } from '../../QuantitySelector'
import { IconButton } from '../../IconButton'
import { Image } from '../../Image'
import { Price } from '../../Price'
import { Tag } from '../../Tag'
import { Text } from '../../Text'
import { StyledRow, StyledTable } from './styled'
import { Stack } from '../../Stack'
import { useMemo } from 'react'
import { CartObject, MyState, selectProductQuantity } from '../../../reducers/cartReducer'
import { useSelector } from 'react-redux'

type Props = {
  options: CartObject[]
  onClick: (value: string) => void
}

export const ShoppingCard = ({ options, onClick }: Props) => {
  // Custom selector function to get the quantity for a specific product
  const getProductQuantity = (productURL: string) => {
    return useSelector((state: { cart: MyState }) =>
      selectProductQuantity(state, productURL)
    )
  }

  const optionsElements = useMemo(
    () =>
      options.map(({ imageURL, text, tagText, currency, value }) => (
        <StyledRow key={imageURL}>
          <Stack justifyContent="space-between" alignItems="center" width="100%">
            <Stack gap="10px">
              <Stack height="100px" width="100px">
                <Image className="shopping-image" imageUrl={imageURL} />
              </Stack>

              <Stack flexDirection="column">
                <Text className="shopping-text" fontSize={20}>
                  {text}
                </Text>
                <Tag text={tagText} />
              </Stack>
            </Stack>

            <Stack>
              <QuantitySelector initalQuantity={getProductQuantity(imageURL)} />
            </Stack>
            <Price currency={currency} value={value} />
            <IconButton
              variant="redIcon"
              iconName="Xmark"
              onClick={() => onClick(imageURL)}
            />
          </Stack>
        </StyledRow>
      )),
    [options, onClick]
  )
  return <StyledTable>{optionsElements}</StyledTable>
}
