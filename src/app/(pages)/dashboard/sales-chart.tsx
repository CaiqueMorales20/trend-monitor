'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Skeleton } from '@/components/ui/skeleton'
import { useSales } from '@/hooks/useSales'
import { groupSalesByMonth } from '@/utils/grou-sales-by-month'

const chartConfig = {
  sales: {
    label: 'sales',
    color: colors.blue['500'],
  },
} satisfies ChartConfig

function SalesChart() {
  const { sales } = useSales()

  const salesByMonth = groupSalesByMonth(sales)

  return (
    <Card>
      <CardHeader className="mb-6">
        <CardTitle className="text-base font-semibold">
          Sales (last 6 months)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {sales && sales.length ? (
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={salesByMonth}>
              <ChartTooltip content={<ChartTooltipContent />} />
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
            </BarChart>
          </ChartContainer>
        ) : (
          ''
        )}
        {!sales ? <Skeleton className="h-80 w-full" /> : ''}
        {sales && sales.length === 0 ? (
          <p className="text-foreground/60">No sales yet.</p>
        ) : (
          ''
        )}
      </CardContent>
    </Card>
  )
}

export { SalesChart }
