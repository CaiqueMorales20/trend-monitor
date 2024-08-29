import { useMutation } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

import { IProduct } from '@/@types/product'
import { queryClient } from '@/lib/query'
import { deleteProduct } from '@/utils/delete-product'

function useDeleteProduct() {
  const searchParams = useSearchParams()

  const { mutateAsync: deleteProductFn } = useMutation({
    mutationKey: ['delete-product'],
    mutationFn: ({ id }: { id: number }) => deleteProduct({ id }),
    onSuccess({ id }) {
      const cached = queryClient.getQueryData<{
        products: IProduct[]
        totalCount: number
      }>(['products', Number(searchParams.get('page'))])

      console.log(cached)

      if (cached) {
        queryClient.setQueryData<{
          products: IProduct[]
          totalCount: number
        }>(['products', Number(searchParams.get('page') ?? 1)], {
          products: cached.products.filter((product) => {
            return product.id !== id
          }),
          totalCount: cached.totalCount - 1,
        })
      }

      toast.success('Product deleted')
    },
    onError() {
      toast.error('Cannot delete a product that has been selled')
    },
  })

  return { deleteProductFn }
}

export { useDeleteProduct }
