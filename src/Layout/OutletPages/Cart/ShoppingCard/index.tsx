import { useDispatch } from 'react-redux'
import { CartObject } from '../../../../features/cart/model'
import { useCallback, useMemo } from 'react'
import { addOneProduct, deleteOneProduct } from '../../../../features/cart/reducer'
import { StyledRow, StyledTable } from './styled'
import { Stack } from '../../../../Shared Components/Stack'
import { weirdSizeDrinks } from '../../Catalog/CatalogPopDishBody/PopDishesCard'
import { Image } from '../../../../Shared Components/Image'
import { Text } from '../../../../Shared Components/Text'
import { Tag } from '../../../../Composite Components/Tag'
import { QuantitySelector } from '../../../../Composite Components/QuantitySelector'
import { Price } from '../../../../Composite Components/Price'
import { IconButton } from '../../../../Composite Components/IconButton'

type Props = {
  options: CartObject[]
  onClick: (value: string) => void
}

export const ShoppingCard = ({ options, onClick }: Props) => {
  const dispatch = useDispatch()

  const handleIncrement = useCallback(
    (product: string) => {
      dispatch(addOneProduct(product))
    },
    [dispatch]
  )

  const handleDecrement = useCallback(
    (product: string) => {
      dispatch(deleteOneProduct(product))
    },
    [dispatch]
  )

  const optionsElements = useMemo(
    () =>
      options.map(({ imageURL, text, tagText, currency, value, quantityCartObject }) => (
        <StyledRow key={imageURL}>
          <Stack justifyContent="space-between" alignItems="center" width="100%">
            <Stack gap="10px">
              <Stack height="100px" width="100px">
                {weirdSizeDrinks.includes(text) ? (
                  <Image className="pop-dish-image" imageUrl={imageURL} />
                ) : (
                  <Image className="pop-dish-image-drink" imageUrl={imageURL} />
                )}
              </Stack>

              <Stack flexDirection="column">
                <Text className="shopping-text" fontSize={20}>
                  {text}
                </Text>
                <Tag text={tagText} />
              </Stack>
            </Stack>

            <Stack>
              <QuantitySelector
                quantity={quantityCartObject}
                onClickMinus={() => handleDecrement(imageURL)}
                onClickPlus={() => handleIncrement(imageURL)}
              />
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
    [options, handleDecrement, handleIncrement, onClick]
  )

  return <StyledTable>{optionsElements}</StyledTable>
}
