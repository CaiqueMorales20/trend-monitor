import { IProduct } from '@/@types/product'

function calculateInventoryItems(products: IProduct[]) {
  const totalItems = products.reduce((acc, product) => {
    return acc + product.quantity
  }, 0)

  return totalItems
}

export { calculateInventoryItems }
