import { IProduct } from './product'

interface ISaleProduct {
  id: number
  product: IProduct
  productId: number
  quantity: number
  saleId: number
}

export type { ISaleProduct }
