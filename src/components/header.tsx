'use client'

// import { useQuery } from '@tanstack/react-query'
import { ArrowUpRight, Blocks, ChartColumnIncreasing, Home } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

// import { getBusinessById } from '@/utils/get-business-by-id'
import { NavLink } from './nav-link'
import { ProfileDropdown } from './profile-dropdown'
import { ThemeToggle } from './ui/theme-toggle'

export function Header() {
  // const { data } = useQuery({
  //   queryKey: ['business'],
  //   queryFn: () => getBusinessById({ id: 3 }),
  // })

  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 w-[90vw] items-center gap-4">
        <Blocks />

        <Separator orientation="vertical" className="h-[60%]" />

        <nav className="flex gap-6">
          <NavLink to="/">
            <Home size={16} />
            Home
          </NavLink>
          <NavLink to="/dashboard">
            <ChartColumnIncreasing size={16} />
            Dashboard
          </NavLink>
          <NavLink to="/sales">
            <ArrowUpRight size={16} />
            Sales
          </NavLink>
        </nav>

        <div className="ml-auto flex gap-2">
          <ThemeToggle />
          <ProfileDropdown name={'Caique Morales'} />
        </div>
      </div>
    </header>
  )
}
