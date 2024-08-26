'use client'

import { Cell, Pie, PieChart } from 'recharts'
import colors from 'tailwindcss/colors'

import { CustomPieLabel } from '@/components/custom-pie-label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Skeleton } from '@/components/ui/skeleton'
import { useMostSoldProducts } from '@/hooks/useMostSoldProducts'

const COLORS = [
  colors.blue['500'],
  colors.amber['500'],
  colors.sky['500'],
  colors.emerald['500'],
  colors.fuchsia['500'],
]

const chartConfig = {}

function ProductSalesChart() {
  const { mostSoldProducts } = useMostSoldProducts()

  return (
    <Card>
      <CardHeader className="mb-6">
        <CardTitle className="text-base font-semibold">
          Most selling products (month)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!mostSoldProducts ? (
          <Skeleton className="m-auto h-80 w-80 rounded-full" />
        ) : (
          ''
        )}
        {mostSoldProducts && mostSoldProducts.length ? (
          <ChartContainer config={chartConfig}>
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Pie
                dataKey="totalQuantitySold"
                data={mostSoldProducts}
                cx={'50%'}
                cy={'50%'}
                innerRadius={80}
                outerRadius={140}
                strokeWidth={16}
                label={(props) => (
                  <CustomPieLabel {...props} data={mostSoldProducts} />
                )}
              >
                {mostSoldProducts.map((_, i) => (
                  <Cell
                    key={`Cell-${i}`}
                    fill={COLORS[i]}
                    className="stroke-card"
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        ) : (
          ''
        )}
        {mostSoldProducts && mostSoldProducts.length === 0 ? (
          <p className="text-foreground/60">No sales yet.</p>
        ) : (
          ''
        )}
      </CardContent>
    </Card>
  )
}

export { ProductSalesChart }
