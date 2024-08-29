import { DollarSign } from 'lucide-react'

import { CardContentSkeleton } from '@/components/card-content-skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useSales } from '@/hooks/use-sales'

function MonthSalesCard() {
  const { sales } = useSales({ page: 1, limit: 100 })

  const today = new Date()
  const oneMonthAgo = new Date(today)
  oneMonthAgo.setDate(today.getMonth() - 1)

  const monthSales = sales?.filter(
    (sale) => new Date(sale.saleDate) >= oneMonthAgo,
  )

  return (
    <Card>
      <CardHeader className="w-full flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-semibold">Sales (month)</CardTitle>
        <DollarSign size={20} className="text-muted-foreground" />
      </CardHeader>
      <CardContent className="">
        {monthSales ? (
          <p className="text-2xl font-bold">{monthSales?.length}</p>
        ) : (
          <CardContentSkeleton />
        )}
      </CardContent>
    </Card>
  )
}

export { MonthSalesCard }
