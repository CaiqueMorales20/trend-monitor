import { format } from 'date-fns'
import { Plus } from 'lucide-react'

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

import { CreateSaleModal } from './create-sale-modal'
import { DetailModal } from './detail-modal'

export default function Sales() {
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
            {Array.from({ length: 4 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>1</TableCell>
                <TableCell>
                  <DialogTrigger asChild>
                    <Button>See detail</Button>
                  </DialogTrigger>
                </TableCell>
                <TableCell>R$ 190,00</TableCell>
                <TableCell>
                  {format(new Date().toISOString(), 'MM/dd/yyyy')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <DetailModal />
      </Dialog>
    </main>
  )
}
