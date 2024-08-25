import { useMutation } from '@tanstack/react-query'

import { ISale } from '@/@types/sale'
import { SaleInput } from '@/@types/saleInput'
import { queryClient } from '@/lib/query'
import { createSale } from '@/utils/create-sale'

function useCreateSale() {
  const { mutateAsync: createSaleFn } = useMutation({
    mutationKey: ['create-sale'],
    mutationFn: ({ products }: { products: SaleInput[] }) =>
      createSale({ products }),
    onSuccess(sale) {
      const cached = queryClient.getQueryData<ISale[]>(['sales'])

      if (cached) {
        queryClient.setQueryData<ISale[]>(['sales'], [...cached, sale])
      }
    },
  })

  return { createSaleFn }
}

export { useCreateSale }
