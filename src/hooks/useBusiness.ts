import { useQuery } from '@tanstack/react-query'

import { getCurrentBusiness } from '@/utils/get-current-business'

function useBusiness() {
  const { data } = useQuery({
    queryKey: ['business'],
    queryFn: getCurrentBusiness,
  })

  return { data }
}

export { useBusiness }
