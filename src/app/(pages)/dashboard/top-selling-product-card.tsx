'use client'

import { Rocket } from 'lucide-react'

import { CardContentSkeleton } from '@/components/card-content-skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useMostSoldProducts } from '@/hooks/use-most-sold-products'

function TopSellingProductCard() {
  const { mostSoldProducts } = useMostSoldProducts()
  const mostSoldProduct = mostSoldProducts?.length ? mostSoldProducts[0] : null

  return (
    <Card>
      <CardHeader className="w-full flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-semibold">
          Top Selling Product
        </CardTitle>
        <Rocket size={20} className="text-muted-foreground" />
      </CardHeader>
      <CardContent className="">
        {mostSoldProducts ? (
          <p className="text-2xl font-bold">
            {mostSoldProduct ? mostSoldProduct.totalQuantitySold : 0}
            <span className="ml-2 text-xs text-muted-foreground">
              {mostSoldProduct && <>({mostSoldProduct.name})</>}
            </span>
          </p>
        ) : (
          <CardContentSkeleton />
        )}
      </CardContent>
    </Card>
  )
}

export { TopSellingProductCard }
