import { DollarSign } from 'lucide-react'

import { CardContentSkeleton } from '@/components/card-content-skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useSales } from '@/hooks/useSales'

function WeekSalesCard() {
  const { sales } = useSales()

  const today = new Date()
  const sevenDaysAgo = new Date(today)
  sevenDaysAgo.setDate(today.getDate() - 7)

  const weekSales = sales?.filter(
    (sale) => new Date(sale.saleDate) >= sevenDaysAgo,
  )

  return (
    <Card>
      <CardHeader className="w-full flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-semibold">Sales (week)</CardTitle>
        <DollarSign size={20} className="text-muted-foreground" />
      </CardHeader>
      <CardContent className="">
        {weekSales ? (
          <p className="text-2xl font-bold">{weekSales?.length}</p>
        ) : (
          <CardContentSkeleton />
        )}
      </CardContent>
    </Card>
  )
}

export { WeekSalesCard }
