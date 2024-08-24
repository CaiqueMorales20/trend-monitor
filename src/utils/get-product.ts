import { api } from '@/lib/axios'

import { getToken } from './get-token'

async function getProducts() {
  const token = await getToken()

  const { data } = await api.get(`/product`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return data
}

export { getProducts }
