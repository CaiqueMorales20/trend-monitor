import { Box } from 'lucide-react'

import { CardContentSkeleton } from '@/components/card-content-skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useProducts } from '@/hooks/use-products'
import { calculateInventoryItems } from '@/utils/calculate-inventory-items'

function InventoryCard() {
  const { products } = useProducts({ page: 1, limit: 1000 })

  return (
    <Card>
      <CardHeader className="w-full flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-semibold">Inventory</CardTitle>
        <Box size={20} className="text-muted-foreground" />
      </CardHeader>
      <CardContent className="">
        {products ? (
          <p className="text-2xl font-bold">
            {calculateInventoryItems(products)}{' '}
            <span className="text-base font-normal text-foreground/80">
              items
            </span>
          </p>
        ) : (
          <CardContentSkeleton />
        )}
      </CardContent>
    </Card>
  )
}

export { InventoryCard }
