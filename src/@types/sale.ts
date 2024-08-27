import { ISaleProduct } from './product-sale'

interface ISale {
  id: number
  businessId: number
  products: ISaleProduct[]
  saleDate: string
}

export type { ISale }
