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

import { DetailModal } from './detail-modal'

export default async function Sales() {
  return (
    <main className="container-c mt-20">
      <h1 className="mb-12 text-3xl font-bold">Sales</h1>

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
                <TableCell>{new Date().toISOString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <DetailModal />
      </Dialog>
    </main>
  )
}
