'use client'

import { format } from 'date-fns'
import { Plus } from 'lucide-react'
import { useState } from 'react'

import { Pagination } from '@/components/pagination'
import { TableContentSkeleton } from '@/components/table-content-skeleton'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { usePaginate } from '@/hooks/use-paginate'
import { useSales } from '@/hooks/use-sales'
import { sumProductsTotal } from '@/utils/sum-products-total'

import { CreateSaleModal } from './create-sale-modal'
import { DetailModal } from './detail-modal'

export default function Sales() {
  const { handlePaginate, PAGE_LIMIT, PAGE } = usePaginate()
  const { sales, totalCount } = useSales({ limit: PAGE_LIMIT, page: PAGE })
  const [currentSaleId, setCurrentSaleId] = useState(0)
  const currentSale = sales?.find((sale) => sale.id === currentSaleId)

  const [createSaleModalOpened, setCreateSaleModalOpened] = useState(false)

  function handleSaleModal() {
    setCreateSaleModalOpened(!createSaleModalOpened)
  }

  return (
    <main className="container-c mt-20">
      <header className="mb-12 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Sales</h1>
        <Dialog open={createSaleModalOpened} onOpenChange={handleSaleModal}>
          <DialogTrigger asChild>
            <Button onClick={() => handleSaleModal()}>
              Add Sale <Plus className="ml-1" size={16} />
            </Button>
          </DialogTrigger>

          <CreateSaleModal handleModal={handleSaleModal} />
        </Dialog>
      </header>

      <Dialog>
        {sales && sales.length ? (
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
              {sales.map((sale, i) => (
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
              ))}
            </TableBody>
          </Table>
        ) : (
          ''
        )}

        {sales && sales.length < 1 ? (
          <p className="text-foreground/60">No sales yet.</p>
        ) : (
          ''
        )}

        {!sales ? (
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
              <TableContentSkeleton />
            </TableBody>
          </Table>
        ) : (
          ''
        )}

        <DetailModal saleProducts={currentSale?.products} />
      </Dialog>

      {sales && sales.length ? (
        <Pagination
          onPaginate={handlePaginate}
          currentQuantity={sales.length}
          limit={PAGE_LIMIT}
          page={PAGE}
          totalCount={totalCount}
        />
      ) : (
        ''
      )}
    </main>
  )
}
