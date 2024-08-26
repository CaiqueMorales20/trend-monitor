import { api } from '@/lib/axios'

import { getDecodedToken } from './get-decoded-token'
import { getToken } from './get-token'

async function updateBusiness({ name }: { name: string }) {
  const decodedToken = await getDecodedToken()
  const token = await getToken()

  const { data } = await api.put(
    `/business/${decodedToken.businessId}`,
    {
      name,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  )

  return data
}

export { updateBusiness }
