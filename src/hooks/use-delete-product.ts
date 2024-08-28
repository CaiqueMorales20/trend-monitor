import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { IProduct } from '@/@types/product'
import { queryClient } from '@/lib/query'
import { deleteProduct } from '@/utils/delete-product'

function useDeleteProduct() {
  const { mutateAsync: deleteProductFn } = useMutation({
    mutationKey: ['delete-product'],
    mutationFn: ({ id }: { id: number }) => deleteProduct({ id }),
    onSuccess({ id }) {
      const cached = queryClient.getQueryData<IProduct[]>(['products'])

      if (cached) {
        queryClient.setQueryData<IProduct[]>(
          ['products'],
          cached.filter((product) => {
            return product.id !== id
          }),
        )
      }

      toast.success('Product deleted')
    },
  })

  return { deleteProductFn }
}

export { useDeleteProduct }
