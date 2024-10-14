import { useDispatch } from 'react-redux'
import { CartObject } from '../../../../features/cart/model'
import { useCallback, useContext, useMemo, useState } from 'react'
import { addOneProduct, deleteOneProduct } from '../../../../features/cart/reducer'
import { StyledRow, StyledTable } from './styled'
import { Stack } from '../../../../Shared Components/Stack'
import { Image } from '../../../../Shared Components/Image'
import { Text } from '../../../../Shared Components/Text'
import { Tag } from '../../../../Composite Components/Tag'
import { QuantitySelector } from '../../../../Composite Components/QuantitySelector'
import { Price } from '../../../../Composite Components/Price'
import { IconButton } from '../../../../Composite Components/IconButton'
import { DialogDeleteProduct } from '../DialogDeleteProduct'
import { CurrencyContext } from '../../..'
import { symbols, weirdSizeDrinks } from '../../../../constants'

type Props = {
  options: CartObject[]
  onClick?: (value: string) => void
}

export const ShoppingCard = ({ options }: Props) => {
  const dispatch = useDispatch()
  const selectedCurrency = useContext(CurrencyContext) as keyof typeof symbols
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleButtonClick = useCallback(() => {
    setIsPopupOpen(true)
  }, [])

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false)
  }, [])

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
      options.map(({ imageURL, text, tagText, value, quantityCartObject }) => (
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
            <Price currency={selectedCurrency} value={value} />
            <IconButton
              variant="redIcon"
              iconName="Xmark"
              onClick={handleButtonClick}
              paddingVar="icon"
            />
            {isPopupOpen && (
              <DialogDeleteProduct product={imageURL} onClose={handleClosePopup} />
            )}
          </Stack>
        </StyledRow>
      )),
    [
      options,
      handleDecrement,
      handleIncrement,
      isPopupOpen,
      handleButtonClick,
      handleClosePopup,
      selectedCurrency
    ]
  )

  return <StyledTable>{optionsElements}</StyledTable>
}
