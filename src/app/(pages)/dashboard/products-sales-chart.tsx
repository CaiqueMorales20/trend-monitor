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

const COLORS = [
  colors.blue['500'],
  colors.amber['500'],
  colors.sky['500'],
  colors.emerald['500'],
  colors.fuchsia['500'],
]

const data = [
  { name: 'X-Tech', quantity: 80 },
  { name: 'X-Salada', quantity: 60 },
  { name: 'X-Tudo', quantity: 20 },
  { name: 'X-Burger', quantity: 40 },
]

const chartConfig = {}

function ProductSalesChart() {
  return (
    <Card>
      <CardHeader className="mb-6">
        <CardTitle className="text-base font-semibold">
          Most selling products (month)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              dataKey="quantity"
              data={data}
              cx={'50%'}
              cy={'50%'}
              innerRadius={100}
              outerRadius={160}
              strokeWidth={16}
              label={(props) => <CustomPieLabel {...props} data={data} />}
            >
              {data.map((_, i) => (
                <Cell
                  key={`Cell-${i}`}
                  fill={COLORS[i]}
                  className="stroke-card"
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export { ProductSalesChart }
