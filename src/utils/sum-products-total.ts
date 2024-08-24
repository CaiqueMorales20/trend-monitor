import { ISaleProduct } from '@/@types/productSale'

import { formatCurrency } from './format-currency'

function sumProductsTotal(saleProducts: ISaleProduct[]) {
  const total = saleProducts.reduce((acc, saleProduct) => {
    return acc + saleProduct.quantity * saleProduct.product.price
  }, 0)

  return formatCurrency(total)
}

export { sumProductsTotal }
