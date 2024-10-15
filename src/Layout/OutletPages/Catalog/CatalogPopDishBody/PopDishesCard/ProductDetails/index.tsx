import { useLocation } from 'react-router-dom'
import { StyledProductDetails } from './styled'
import { CatalogItem } from './CatalogItem'
import { Review } from './Review'

export const ProductDetails = () => {
  const { state } = useLocation()
  return (
    <StyledProductDetails>
      <CatalogItem
        text={state?.text}
        textp={state?.textp}
        imageURL={state?.imageURL}
        currency={state?.currency}
        value={state?.value}
        tagText={state?.tagText}
        rating={state?.rating}
        discountRate={state?.discountRate}
      />

      <Review id={state?.id} />
    </StyledProductDetails>
  )
}
