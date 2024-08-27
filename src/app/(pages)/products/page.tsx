'use client'

import { format } from 'date-fns'
import { Plus } from 'lucide-react'
import { useState } from 'react'

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
import { useSales } from '@/hooks/useSales'

import { CreateProductModal } from './create-product-modal'

export default function Products() {
  const { sales } = useSales()

  const [createSaleModalOpened, setCreateSaleModalOpened] = useState(false)

  function handleSaleModal() {
    setCreateSaleModalOpened(!createSaleModalOpened)
  }

  return (
    <main className="container-c mt-20">
      <header className="mb-12 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Dialog open={createSaleModalOpened} onOpenChange={handleSaleModal}>
          <DialogTrigger asChild>
            <Button onClick={() => handleSaleModal()}>
              Add Product <Plus className="ml-1" size={16} />
            </Button>
          </DialogTrigger>

          <CreateProductModal />
        </Dialog>
      </header>

      {sales && sales.length ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">ID</TableHead>
              <TableHead className="w-60">Name</TableHead>
              <TableHead className="w-40">Stock Quantity</TableHead>
              <TableHead className="w-60">Created Date</TableHead>
              <TableHead className="w-20"></TableHead>
              <TableHead className="w-20"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sales.map((sale, i) => (
              <TableRow key={i}>
                <TableCell>{sale.id}</TableCell>
                <TableCell>Comida</TableCell>
                <TableCell>20</TableCell>
                <TableCell>
                  {format(new Date(sale.saleDate), 'MM/dd/yyyy')}
                </TableCell>
                <TableCell>
                  <Button variant={'secondary'}>Update</Button>
                </TableCell>
                <TableCell>
                  <Button variant={'destructive'}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-foreground/60">No sales yet.</p>
      )}
    </main>
  )
}
