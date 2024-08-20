import { InventoryCard } from './inventory-card'
import { MonthSalesCard } from './month-sales-card'
import { TopSellingProductCard } from './top-selling-product-card'
import { WeekSalesCard } from './week-sales-card'

export default async function Dashboard() {
  return (
    <main className="container-c mt-10">
      <div className="grid grid-cols-4 gap-6">
        <MonthSalesCard />
        <InventoryCard />
        <WeekSalesCard />
        <TopSellingProductCard />
      </div>
    </main>
  )
}
