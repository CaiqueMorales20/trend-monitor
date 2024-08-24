import { api } from '@/lib/axios'

import { getDecodedToken } from './get-decoded-token'
import { getToken } from './get-token'

async function getCurrentBusiness() {
  const decodedToken = await getDecodedToken()
  const token = await getToken()

  const { data } = await api.get(`/business/${decodedToken.businessId}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return data
}

export { getCurrentBusiness }
