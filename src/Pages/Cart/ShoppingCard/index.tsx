import { useDispatch } from 'react-redux'
import { useCallback, useContext, useMemo, useState } from 'react'
import { addOneProduct, deleteOneProduct } from '../../../features/cart/reducer'
import { convertValue } from '../../../utils/convertValues'
import { CurrencyContext } from '../../../Layout'
import { symbols } from '../../../constants'
import { CartObject } from '../../../features/cart/model'
import { conversionRates } from '../../../constants'
import { Image } from '../../../shared components/Image'
import { IconButton } from '../../../shared components/IconButton'
import { Overlay } from '../../../shared components/Overlay/styled'
import { DialogDeleteProduct } from '../DialogDeleteProduct'
import { Price } from '../../../shared components/Price'
import { QuantitySelector } from '../../../shared components/QuantitySelector'
import { Stack } from '../../../shared components/Stack'
import { Tag } from '../../../shared components/Tag'
import { Text } from '../../../shared components/Text'
import { StyledRow, StyledTable } from './styled'
import { weirdSizeDrinks } from '../../../constants/'

type Props = {
  options: CartObject[]
  onClick?: (value: string) => void
}

export const ShoppingCard = ({ options }: Props) => {
  const dispatch = useDispatch()
  const selectedCurrency = useContext(CurrencyContext) as keyof typeof symbols
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<string | null>(null)

  const handleButtonClick = useCallback((product: string) => {
    setProductToDelete(product)
    setIsPopupOpen(true)
  }, [])

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false)
    setProductToDelete(null)
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

            <Stack gap="22px">
              <Stack>
                <QuantitySelector
                  quantity={quantityCartObject}
                  onClickMinus={() => handleDecrement(imageURL)}
                  onClickPlus={() => handleIncrement(imageURL)}
                />
              </Stack>
              <Price
                currency={selectedCurrency}
                value={
                  convertValue(
                    { type: currency, value },
                    selectedCurrency,
                    conversionRates
                  ) || ''
                }
              />
              <IconButton
                variant="redIcon"
                iconName="Xmark"
                onClick={() => handleButtonClick(imageURL)}
                paddingVar="icon"
                size="xl"
              />
              {isPopupOpen && <Overlay />}
              {isPopupOpen && productToDelete === imageURL && (
                <DialogDeleteProduct product={imageURL} onClose={handleClosePopup} />
              )}
            </Stack>
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
      selectedCurrency,
      productToDelete
    ]
  )

  return <StyledTable>{optionsElements}</StyledTable>
}
