import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import useProduct from 'vtex.product-context/useProduct'
import { useProductDispatch } from 'vtex.product-context/ProductDispatchContext'

import BaseProductQuantity, {
  BaseProps,
} from './components/BaseProductQuantity'

const CSS_HANDLES = ['summaryContainer'] as const

const ProductSummaryQuantity: StorefrontFunctionComponent<BaseProps> = props => {
  const { warningQuantityThreshold, showLabel, size, selectorType } = props
  const handles = useCssHandles(CSS_HANDLES)
  const { selectedItem, selectedQuantity } = useProduct()
  const dispatch = useProductDispatch()

  const handleClick: React.MouseEventHandler<HTMLDivElement> = e => {
    e.preventDefault()
    // Stop propagation so it doesn't trigger the Link component above
    e.stopPropagation()
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={handleClick}
      className={`${handles.summaryContainer} center mw-100`}>
      <BaseProductQuantity
        size={size}
        dispatch={dispatch}
        showLabel={showLabel}
        selectedItem={selectedItem}
        selectedQuantity={selectedQuantity}
        selectorType={selectorType}
        warningQuantityThreshold={warningQuantityThreshold}
      />
    </div>
  )
}

ProductSummaryQuantity.schema = {
  title: 'admin/editor.product-quantity.title',
  description: 'admin/editor.product-quantity.description',
}

export default ProductSummaryQuantity
