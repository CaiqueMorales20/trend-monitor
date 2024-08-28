import { useQuery } from '@tanstack/react-query'

import { ISale } from '@/@types/sale'
import getSales from '@/utils/get-sales'

function useSales() {
  const { data: sales } = useQuery({
    queryKey: ['sales'],
    queryFn: getSales,
  })

  return { sales } as { sales: ISale[] }
}

export { useSales }
