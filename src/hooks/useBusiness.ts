import { useQuery } from '@tanstack/react-query'

import { IBusiness } from '@/@types/business'
import { getCurrentBusiness } from '@/utils/get-current-business'

function useBusiness() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getCurrentBusiness,
  })

  return { business } as { business: IBusiness }
}

export { useBusiness }
