import { useQuery } from '@tanstack/react-query'

import { IProduct } from '@/@types/product'
import { getMostSoldProducts } from '@/utils/get-most-sold-products'

function useMostSoldProducts() {
  const { data: mostSoldProducts } = useQuery({
    queryKey: ['most-sold-products'],
    queryFn: getMostSoldProducts,
  })

  return { mostSoldProducts } as { mostSoldProducts: IProduct[] }
}

export { useMostSoldProducts }
