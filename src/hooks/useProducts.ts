import { useQuery } from '@tanstack/react-query'

import { IProduct } from '@/@types/product'
import { getProducts } from '@/utils/get-product'

function useProducts() {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return { products } as { products: IProduct[] }
}

export { useProducts }
