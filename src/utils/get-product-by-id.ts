import { IProduct } from '@/@types/product'
import { api } from '@/lib/axios'

import { getToken } from './get-token'

async function getProductById({ id }: { id: number }) {
  const token = await getToken()

  const { data } = await api.get(`/product/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return data as IProduct
}

export { getProductById }
