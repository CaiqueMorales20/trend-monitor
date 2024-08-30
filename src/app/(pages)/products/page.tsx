'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'

import { Pagination } from '@/components/pagination'
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
import { useDeleteProduct } from '@/hooks/use-delete-product'
import { usePaginate } from '@/hooks/use-paginate'
import { useProducts } from '@/hooks/use-products'

import { CreateProductModal } from './create-product-modal'

export default function Products() {
  const { handlePaginate, PAGE_LIMIT, PAGE } = usePaginate()
  const { products, totalCount } = useProducts({
    limit: PAGE_LIMIT,
    page: PAGE,
  })
  const { deleteProductFn } = useDeleteProduct()

  const [createProductModalOpened, setCreateProductModalOpened] =
    useState(false)

  function handleProductModal() {
    setCreateProductModalOpened(!createProductModalOpened)
  }

  return (
    <main className="container-c mt-20">
      <header className="mb-12 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Dialog
          open={createProductModalOpened}
          onOpenChange={handleProductModal}
        >
          <DialogTrigger asChild>
            <Button onClick={() => handleProductModal()}>
              Add Product <Plus className="ml-1" size={16} />
            </Button>
          </DialogTrigger>

          <CreateProductModal handleModal={() => handleProductModal()} />
        </Dialog>
      </header>

      {products && products.length ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">ID</TableHead>
              <TableHead className="w-40">Name</TableHead>
              <TableHead className="w-40">Category</TableHead>
              <TableHead className="w-40">Stock Quantity</TableHead>
              {/* <TableHead className="w-20"></TableHead> */}
              <TableHead className="w-20"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, i) => (
              <TableRow key={i}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell className="capitalize">
                  {product.category?.name}
                </TableCell>
                <TableCell>{product.quantity}</TableCell>
                {/* <TableCell>
                  <Button
                    onClick={() => toast('Product updated')}
                    variant={'secondary'}
                  >
                    Update
                  </Button>
                </TableCell> */}
                <TableCell>
                  <Button
                    onClick={() => deleteProductFn({ id: product.id })}
                    variant={'destructive'}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-foreground/60">No products yet.</p>
      )}

      {products && products.length ? (
        <Pagination
          onPaginate={handlePaginate}
          currentQuantity={products.length}
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
