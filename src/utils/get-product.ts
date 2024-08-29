import { api } from '@/lib/axios'

import { getToken } from './get-token'

interface PaginateQuery {
  page?: number
  limit?: number
}

async function getProducts({ limit, page }: PaginateQuery) {
  const token = await getToken()

  const { data } = await api.get(`/product`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
    params: {
      page,
      limit,
    },
  })

  return data
}

export { getProducts }
