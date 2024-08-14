import { Cable, LogOut } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'}>Caique Morales</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="mt-2 w-[200px] max-w-[400px] p-2"
      >
        <DropdownMenuItem className="flex gap-2 text-sm">
          <Cable size={14} /> Change account
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 text-sm text-red-500">
          <LogOut size={14} /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
