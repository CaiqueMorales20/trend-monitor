import { useMutation } from '@tanstack/react-query'

import { SaleInput } from '@/@types/saleInput'
import { createSale } from '@/utils/create-sale'

function useCreateSale() {
  const { mutateAsync: createSaleFn } = useMutation({
    mutationKey: ['create-sale'],
    mutationFn: ({ products }: { products: SaleInput[] }) =>
      createSale({ products }),
  })

  return { createSaleFn }
}

export { useCreateSale }
