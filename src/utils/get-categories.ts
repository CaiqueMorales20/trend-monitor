import { api } from '@/lib/axios'

import { getToken } from './get-token'

async function getCategories() {
  const token = await getToken()

  const { data } = await api.get('/category', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return data
}

export { getCategories }
