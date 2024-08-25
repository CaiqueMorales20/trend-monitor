import { ISale } from '@/@types/sale'
import { SaleInput } from '@/@types/saleInput'
import { api } from '@/lib/axios'

import { getToken } from './get-token'

async function createSale({ products }: { products: SaleInput[] }) {
  const token = await getToken()

  const { data: sale } = await api.post(
    '/sale',
    {
      products,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  )

  return sale as ISale
}

export { createSale }
