import { useLocation } from 'react-router-dom'
import { StyledProductDetails } from './styled'
import { CatalogItem } from '../../Components/CatalogItem'

export const ProductDetails = () => {
  let { state } = useLocation()
  return (
    <StyledProductDetails>
      <CatalogItem
        text={state?.text}
        textp={state?.textp}
        imgURL={state?.imageURL}
        currency={state?.currency}
        value={state?.value}
      />
    </StyledProductDetails>
  )
}