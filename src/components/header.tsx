import { Blocks, ChartColumnIncreasing, Home } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import { NavLink } from './nav-link'
import { ProfileDropdown } from './profile-dropdown'
import { ThemeToggle } from './ui/theme-toggle'

export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-20 w-[90%] items-center gap-4">
        <Blocks />

        <Separator orientation="vertical" className="h-[60%]" />

        <nav className="flex gap-4">
          <NavLink to="/">
            <Home size={16} />
            Home
          </NavLink>
          <NavLink to="/dashboard">
            <ChartColumnIncreasing size={16} />
            Dashboard
          </NavLink>
        </nav>

        <div className="ml-auto flex gap-2">
          <ThemeToggle />
          <ProfileDropdown />
        </div>
      </div>
    </header>
  )
}
