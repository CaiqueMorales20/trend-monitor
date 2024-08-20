import { api } from '@/lib/axios'

async function getBusiness() {
  const { data } = await api.get('/business', {
    headers: {
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_ADM_TOKEN,
    },
  })

  return data
}

export { getBusiness }
