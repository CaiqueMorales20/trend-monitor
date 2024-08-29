import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

interface PaginationProps {
  page: number
  limit: number
  totalCount: number
  currentQuantity: number
  onPaginate: (page: number) => void
}

function Pagination({
  page,
  limit,
  totalCount,
  onPaginate,
  currentQuantity,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / limit)

  return (
    <div className="mb-20 mt-10 flex items-center justify-between">
      <div className="flex gap-1">
        <span>{page * limit - limit + totalCount - (totalCount - 1)}</span>
        <span>-</span>
        <span>{page * limit - limit + currentQuantity}</span>
      </div>

      <div className="flex gap-2">
        <Button
          disabled={page === 1}
          onClick={() => onPaginate(1)}
          variant={'outline'}
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button
          disabled={page === 1}
          onClick={() => onPaginate(page - 1)}
          variant={'outline'}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          disabled={pages === page}
          onClick={() => onPaginate(page + 1)}
          variant={'outline'}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          disabled={pages === page}
          onClick={() => onPaginate(pages)}
          variant={'outline'}
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export { Pagination }
