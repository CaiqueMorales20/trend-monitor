import { Skeleton } from './ui/skeleton'

function CardContentSkeleton() {
  return (
    <div className="space-y-2">
      <div className="flex items-end gap-2">
        <Skeleton className="h-6 w-10" />
        <Skeleton className="h-4 w-14" />
      </div>
    </div>
  )
}

export { CardContentSkeleton }
