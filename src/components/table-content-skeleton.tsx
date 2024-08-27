import { Skeleton } from './ui/skeleton'
import { TableCell, TableRow } from './ui/table'

function TableContentSkeleton() {
  return Array.from({ length: 8 }).map((_, i) => (
    <TableRow key={i}>
      <TableCell>
        <Skeleton className="h-8" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-8" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-8" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-8" />
      </TableCell>
    </TableRow>
  ))
}

export { TableContentSkeleton }
