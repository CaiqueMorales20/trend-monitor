import { useMutation } from '@tanstack/react-query'

import { IProduct } from '@/@types/product'
import { queryClient } from '@/lib/query'
import { createProduct } from '@/utils/create-product'

function useCreateProduct() {
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
      const cached = queryClient.getQueryData<IProduct[]>(['products'])

      if (cached) {
        queryClient.setQueryData<IProduct[]>(['products'], [...cached, product])
      }
    },
  })

  return { createProductFn }
}

export { useCreateProduct }
