import { IProduct } from '@/@types/product'
import { api } from '@/lib/axios'

import { getToken } from './get-token'

async function getMostSoldProducts() {
  const token = await getToken()

  const { data } = await api.get(`/product/most-sold`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  console.log('dataa', data)

  return data as IProduct[]
}

export { getMostSoldProducts }
