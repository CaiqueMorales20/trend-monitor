import { useQuery } from '@tanstack/react-query'

import { ISale } from '@/@types/sale'
import getSales from '@/utils/get-sales'

function useSales({ limit, page }: { page: number; limit: number }) {
  const { data } = useQuery({
    queryKey: ['sales', page],
    queryFn: () => getSales({ limit, page }),
  })

  // return { sales: [] }

  return { sales: data?.sales, totalCount: data?.totalCount } as {
    sales: ISale[]
    totalCount: number
  }
}

export { useSales }
