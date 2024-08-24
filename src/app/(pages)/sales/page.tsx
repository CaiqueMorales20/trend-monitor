'use client'

import { format } from 'date-fns'
import { Plus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useSales } from '@/hooks/useSales'
import { sumProductsTotal } from '@/utils/sum-products-total'

import { CreateSaleModal } from './create-sale-modal'
import { DetailModal } from './detail-modal'

export default function Sales() {
  const { data: sales } = useSales()
  const [currentSaleId, setCurrentSaleId] = useState(0)
  const currentSale = sales?.find((sale) => sale.id === currentSaleId)

  return (
    <main className="container-c mt-20">
      <header className="mb-12 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Sales</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              Add Sale <Plus className="ml-1" size={16} />
            </Button>
          </DialogTrigger>

          <CreateSaleModal />
        </Dialog>
      </header>

      <Dialog>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-40">ID</TableHead>
              <TableHead className="w-80">Products</TableHead>
              <TableHead className="w-80">Total</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sales
              ? sales?.map((sale, i) => (
                  <TableRow key={i}>
                    <TableCell>{sale.id}</TableCell>
                    <TableCell>
                      <DialogTrigger asChild>
                        <Button onClick={() => setCurrentSaleId(sale.id)}>
                          See detail
                        </Button>
                      </DialogTrigger>
                    </TableCell>
                    <TableCell>{sumProductsTotal(sale.products)}</TableCell>
                    <TableCell>
                      {format(new Date(sale.saleDate), 'MM/dd/yyyy')}
                    </TableCell>
                  </TableRow>
                ))
              : Array.from({ length: 8 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Skeleton className="h-8" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-8" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-8" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-8" />
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>

        <DetailModal saleProducts={currentSale?.products} />
      </Dialog>
    </main>
  )
}
