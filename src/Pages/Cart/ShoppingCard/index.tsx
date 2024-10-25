import { useDispatch } from 'react-redux'
import { useCallback, useContext, useMemo, useState } from 'react'
import { convertValue } from '../../../utils/convertValues'
import { CurrencyContext } from '../../../Layout'
import { symbols } from '../../../constants'
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
import { CartProduct } from '../../../features/cart/model'
import { updateProductQuantity } from '../../../features/cart/reducer'

type Props = {
  options: CartProduct[]
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

  const handleModifyQuantityProduct = useCallback(
    (product: string, quantity: number) => {
      const currentProduct = options.find((item) => item.product.id === product)
      currentProduct
        ? dispatch(
            updateProductQuantity({ product: currentProduct.product, quantity: quantity })
          )
        : null
    },
    [dispatch]
  )

  const optionsElements = useMemo(
    () =>
      options.map(({ product, quantity }) => (
        <StyledRow key={product.imageURL}>
          <Stack justifyContent="space-between" alignItems="center" width="100%">
            <Stack gap="10px">
              <Stack height="100px" width="100px">
                {weirdSizeDrinks.includes(product.text) ? (
                  <Image className="pop-dish-image" imageUrl={product.imageURL} />
                ) : (
                  <Image className="pop-dish-image-drink" imageUrl={product.imageURL} />
                )}
              </Stack>

              <Stack flexDirection="column">
                <Text className="shopping-text" fontSize={20}>
                  {product.text}
                </Text>
                <Tag text={product.tagText} />
              </Stack>
            </Stack>

            <Stack gap="22px">
              <Stack>
                <QuantitySelector
                  quantity={quantity}
                  onClickMinus={() => handleModifyQuantityProduct(product.id, -1)}
                  onClickPlus={() => handleModifyQuantityProduct(product.id, 1)}
                />
              </Stack>
              <Price
                currency={selectedCurrency}
                value={
                  convertValue(
                    {
                      type: product.currency,
                      value: (parseFloat(product.value) * quantity).toFixed(2).toString()
                    },
                    selectedCurrency,
                    conversionRates
                  ) || ''
                }
              />
              <IconButton
                variant="redIcon"
                iconName="Xmark"
                onClick={() => handleButtonClick(product.id)}
                paddingVar="icon"
                size="xl"
              />
              {isPopupOpen && <Overlay />}
              {isPopupOpen && productToDelete === product.id && (
                <DialogDeleteProduct productId={product.id} onClose={handleClosePopup} />
              )}
            </Stack>
          </Stack>
        </StyledRow>
      )),
    [
      options,
      isPopupOpen,
      handleButtonClick,
      handleClosePopup,
      selectedCurrency,
      productToDelete
    ]
  )

  return <StyledTable>{optionsElements}</StyledTable>
}
