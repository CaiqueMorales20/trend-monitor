import { useQuery } from '@tanstack/react-query'

import { IProduct } from '@/@types/product'
import { getProducts } from '@/utils/get-product'

function useProducts({ limit, page }: { page: number; limit: number }) {
  const { data } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getProducts({ limit, page }),
  })

  return { products: data?.products, totalCount: data?.totalCount } as {
    products: IProduct[]
    totalCount: number
  }
}

export { useProducts }
