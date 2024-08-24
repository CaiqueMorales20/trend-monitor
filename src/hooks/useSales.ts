import { useQuery } from '@tanstack/react-query'

import { ISale } from '@/@types/sale'
import getSales from '@/utils/get-sales'

function useSales() {
  const { data } = useQuery({
    queryKey: ['sales'],
    queryFn: getSales,
  })

  return { data } as { data: ISale[] }
}

export { useSales }
