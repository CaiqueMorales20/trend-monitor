import { useQuery } from '@tanstack/react-query'

import { IProduct } from '@/@types/product'
import { getProducts } from '@/utils/get-product'

function useProducts() {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return { data } as { data: IProduct[] }
}

export { useProducts }
