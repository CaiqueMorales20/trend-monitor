import { api } from '@/lib/axios'

async function getBusinessById({ id }: { id: number }) {
  console.log('entered')

  const { data } = await api.get(`/business/${id}`, {
    headers: {
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_ADM_TOKEN,
    },
  })

  console.log(data)

  return data
}

export { getBusinessById }
