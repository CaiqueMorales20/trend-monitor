import { api } from '@/lib/axios'

import { getToken } from './get-token'

interface PaginateQuery {
  page?: number
  limit?: number
}

async function getSales({ limit, page }: PaginateQuery) {
  const token = await getToken()

  const { data } = await api.get(`/sale`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
    params: {
      page,
      limit,
    },
  })

  console.log('data here', data)
  return data
}

export default getSales
