import { Cable, LogOut } from 'lucide-react'

import { logout } from '@/utils/logout'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Skeleton } from './ui/skeleton'

export function ProfileDropdown({ name }: { name: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'}>
          {name ?? <Skeleton className="h-3 w-24" />}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="mt-2 w-[200px] max-w-[400px] p-2"
      >
        <DropdownMenuItem className="flex gap-2 text-sm">
          <Cable size={14} /> Update info
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => logout()}
          className="flex gap-2 text-sm text-red-500"
        >
          <LogOut size={14} /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
