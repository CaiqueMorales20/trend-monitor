import { ICategory } from './category'

interface IProduct {
  businessId: number
  categoryId: number
  id: number
  name: string
  price: number
  quantity: number
  category?: ICategory
  totalQuantitySold?: number
}

export type { IProduct }
