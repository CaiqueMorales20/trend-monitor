import { IProduct } from '@/@types/product'
import { api } from '@/lib/axios'

import { getToken } from './get-token'

async function deleteProduct({ id }: { id: number }) {
  const token = await getToken()

  const { data: deletedProduct } = await api.delete(`/product/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return deletedProduct as IProduct
}

export { deleteProduct }
