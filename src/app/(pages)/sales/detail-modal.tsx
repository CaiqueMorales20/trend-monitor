import { ISaleProduct } from '@/@types/product-sale'
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
import { formatCurrency } from '@/utils/format-currency'
import { sumProductsTotal } from '@/utils/sum-products-total'

function DetailModal({
  saleProducts,
}: {
  saleProducts: ISaleProduct[] | undefined
}) {
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
          {saleProducts?.map((saleProduct) => (
            <TableRow key={saleProduct.id}>
              <TableCell>{saleProduct.product.name}</TableCell>
              <TableCell>{saleProduct.quantity}</TableCell>
              <TableCell>{formatCurrency(saleProduct.product.price)}</TableCell>
              <TableCell>
                {formatCurrency(
                  saleProduct.product.price * saleProduct.quantity,
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell>{sumProductsTotal(saleProducts ?? [])}</TableCell>
        </TableFooter>
      </Table>
    </DialogContent>
  )
}

export { DetailModal }
