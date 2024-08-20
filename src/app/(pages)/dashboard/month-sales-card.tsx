import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function MonthSalesCard() {
  return (
    <Card>
      <CardHeader className="w-full flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-semibold">Sales (month)</CardTitle>
        <DollarSign size={20} className="text-muted-foreground" />
      </CardHeader>
      <CardContent className="">
        <p className="text-2xl font-bold">400</p>
        <p className="text-xs text-muted-foreground">
          <span className="text-green-500">+4%</span> than last month
        </p>
      </CardContent>
    </Card>
  )
}

export { MonthSalesCard }
