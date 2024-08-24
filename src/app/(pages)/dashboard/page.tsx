'use client'

import { useSales } from '@/hooks/useSales'

import { InventoryCard } from './inventory-card'
import { MonthSalesCard } from './month-sales-card'
import { ProductSalesChart } from './products-sales-chart'
import { SalesChart } from './sales-chart'
import { TopSellingProductCard } from './top-selling-product-card'
import { WeekSalesCard } from './week-sales-card'

export default function Dashboard() {
  const { data: sales } = useSales()

  return (
    <main className="container-c mt-10">
      <div className="mb-10 grid gap-6 md:grid-cols-4">
        <MonthSalesCard />
        <InventoryCard />
        <WeekSalesCard />
        <TopSellingProductCard />
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <SalesChart />
        <ProductSalesChart />
      </div>
    </main>
  )
}
