import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function WeekSalesCard() {
  return (
    <Card>
      <CardHeader className="w-full flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-semibold">Sales (week)</CardTitle>
        <DollarSign size={20} className="text-muted-foreground" />
      </CardHeader>
      <CardContent className="">
        <p className="text-2xl font-bold">30</p>
        <p className="text-xs text-muted-foreground">
          <span className="text-red-500">-10%</span> than last week
        </p>
      </CardContent>
    </Card>
  )
}

export { WeekSalesCard }
