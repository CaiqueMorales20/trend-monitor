import { useMutation } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { IProduct } from '@/@types/product'
import { queryClient } from '@/lib/query'
import { createProduct } from '@/utils/create-product'

function useCreateProduct() {
  const searchParams = useSearchParams()

  const { mutateAsync: createProductFn } = useMutation({
    mutationKey: ['create-product'],
    mutationFn: ({
      name,
      categoryId,
      price,
      quantity,
    }: Pick<IProduct, 'name' | 'categoryId' | 'price' | 'quantity'>) =>
      createProduct({ name, categoryId, price, quantity }),
    onSuccess(product) {
      const cached = queryClient.getQueryData<{
        products: IProduct[]
        totalCount: number
      }>(['products', Number(searchParams.get('page') ?? 1)])

      if (cached) {
        queryClient.setQueryData<{
          products: IProduct[]
          totalCount: number
        }>(['products', Number(searchParams.get('page') ?? 1)], {
          products: [...cached.products, product],
          totalCount: cached.totalCount + 1,
        })
      }
    },
  })

  return { createProductFn }
}

export { useCreateProduct }
