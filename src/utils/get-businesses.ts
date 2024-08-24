import { api } from '@/lib/axios'

import { getToken } from './get-token'

async function getBusiness() {
  const token = await getToken()

  const { data } = await api.get('/business', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return data
}

export { getBusiness }
