import { Rocket } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function TopSellingProductCard() {
  return (
    <Card>
      <CardHeader className="w-full flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-semibold">
          Top Selling Product
        </CardTitle>
        <Rocket size={20} className="text-muted-foreground" />
      </CardHeader>
      <CardContent className="">
        <p className="text-2xl font-bold">
          40
          <span className="text-xs text-muted-foreground">(Notebook Acer)</span>
        </p>
        <p className="text-xs text-muted-foreground">
          <span className="text-green-500">+4%</span> than last month
        </p>
      </CardContent>
    </Card>
  )
}

export { TopSellingProductCard }
