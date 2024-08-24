import { ISaleProduct } from './productSale'

interface ISale {
  id: number
  businessId: number
  products: ISaleProduct[]
  saleDate: string
}

export type { ISale }
