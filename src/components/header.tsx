'use client'

import {
  ArrowUpRight,
  Blocks,
  ChartColumnIncreasing,
  Package,
} from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { useBusiness } from '@/hooks/use-business'

import { NavLink } from './nav-link'
import { ProfileDropdown } from './profile-dropdown'
import { ThemeToggle } from './ui/theme-toggle'

export function Header() {
  const { business } = useBusiness()

  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 w-[90vw] items-center gap-4">
        <Blocks />

        <Separator orientation="vertical" className="h-[60%]" />

        <nav className="flex gap-6">
          <NavLink to="/dashboard">
            <ChartColumnIncreasing size={16} />
            Dashboard
          </NavLink>
          <NavLink to="/sales">
            <ArrowUpRight size={16} />
            Sales
          </NavLink>
          <NavLink to="/products">
            <Package size={16} />
            Products
          </NavLink>
        </nav>

        <div className="ml-auto flex gap-2">
          <ThemeToggle />
          <ProfileDropdown name={business?.name} />
        </div>
      </div>
    </header>
  )
}
