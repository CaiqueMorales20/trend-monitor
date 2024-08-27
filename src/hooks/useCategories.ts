import { useQuery } from '@tanstack/react-query'

import { ICategory } from '@/@types/category'
import { getCategories } from '@/utils/get-categories'

function useCategories() {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  return { categories } as { categories: ICategory[] }
}

export { useCategories }
