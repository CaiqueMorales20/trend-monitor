import { useQuery } from '@tanstack/react-query'

import { getProductById } from '@/utils/get-product-by-id'

function useProduct({ id }: { id: number }) {
  const { data: product } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById({ id }),
  })

  return { product }
}

export { useProduct }
