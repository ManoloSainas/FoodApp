import { useLocation } from 'react-router-dom'
import { StyledProductDetails } from './styled'
import { CatalogItem } from './CatalogItem'
import { Review } from './Review'

export const ProductDetails = () => {
  let { state } = useLocation()
  return (
    <StyledProductDetails>
      <CatalogItem
        text={state?.text}
        textp={state?.textp}
        imageURL={state?.imageURL}
        currency={state?.currency}
        value={state?.value}
        tagText={state?.tagText}
      />

      <Review />
    </StyledProductDetails>
  )
}
