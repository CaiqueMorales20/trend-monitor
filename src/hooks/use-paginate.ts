import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function usePaginate() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const current = new URLSearchParams(Array.from(searchParams.entries()))

  const PAGE_LIMIT = 10
  const PAGE = Number(searchParams.get('page') ?? 1)

  function handlePaginate(page: number) {
    current.set('page', String(page))

    const query = current ? `?${current}` : ''

    router.push(`${pathname}${query}`)
  }

  return { PAGE_LIMIT, PAGE, handlePaginate }
}

export { usePaginate }
