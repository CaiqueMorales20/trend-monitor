import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function DetailModal() {
  return (
    <DialogContent>
      <DialogTitle>Products</DialogTitle>
      <DialogDescription className="sr-only">
        Sale description
      </DialogDescription>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Subtotal</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>X-Tech</TableCell>
            <TableCell>4</TableCell>
            <TableCell>R$ 15,00</TableCell>
            <TableCell>R$ 60,00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Coca</TableCell>
            <TableCell>3</TableCell>
            <TableCell>R$ 8,00</TableCell>
            <TableCell>R$ 24,00</TableCell>
          </TableRow>
        </TableBody>

        <TableFooter>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell>R$ 84,00</TableCell>
        </TableFooter>
      </Table>
    </DialogContent>
  )
}

export { DetailModal }
