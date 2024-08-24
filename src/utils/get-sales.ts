import { api } from '@/lib/axios'

import { getToken } from './get-token'

async function getSales() {
  const token = await getToken()

  const { data } = await api.get('/sale', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return data
}

export default getSales
