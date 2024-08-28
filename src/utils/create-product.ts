import { IProduct } from '@/@types/product'
import { api } from '@/lib/axios'

import { getDecodedToken } from './get-decoded-token'
import { getToken } from './get-token'

async function createProduct({
  name,
  categoryId,
  price,
  quantity,
}: Pick<IProduct, 'name' | 'categoryId' | 'price' | 'quantity'>) {
  const token = await getToken()

  const { businessId } = await getDecodedToken()

  const { data: newProduct } = await api.post(
    '/product',
    {
      name,
      categoryId,
      price,
      quantity,
      businessId,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  )

  return newProduct as IProduct
}

export { createProduct }
