import { useMutation } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { ISale } from '@/@types/sale'
import { SaleInput } from '@/@types/saleInput'
import { queryClient } from '@/lib/query'
import { createSale } from '@/utils/create-sale'

function useCreateSale() {
  const searchParams = useSearchParams()

  const { mutateAsync: createSaleFn } = useMutation({
    mutationKey: ['create-sale'],
    mutationFn: ({ products }: { products: SaleInput[] }) =>
      createSale({ products }),
    onSuccess(sale) {
      const cached = queryClient.getQueryData<{
        sales: ISale[]
        totalCount: number
      }>(['sales', Number(searchParams.get('page') ?? 1)])

      if (cached) {
        queryClient.setQueryData<{
          sales: ISale[]
          totalCount: number
        }>(['sales', Number(searchParams.get('page') ?? 1)], {
          sales: [...cached.sales, sale],
          totalCount: cached.totalCount + 1,
        })
      }
    },
  })

  return { createSaleFn }
}

export { useCreateSale }
