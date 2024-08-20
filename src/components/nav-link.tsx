'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export function NavLink({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const baseClass = 'flex gap-2 base items-center'
  const activeClass = 'font-bold'

  return (
    <Link
      className={twMerge(baseClass, to === pathname && activeClass)}
      href={to}
    >
      {children}
    </Link>
  )
}
