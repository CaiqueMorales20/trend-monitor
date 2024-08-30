'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormError } from '@/components/form-error'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useCreateSale } from '@/hooks/use-create-sale'
import { useProducts } from '@/hooks/use-products'

import { ProductQuantityController } from './product-quantity-controller'

const createSaleSchema = z.object({
  products: z.array(
    z.object({
      id: z.coerce.number().min(1, 'Select a product'),
      quantity: z.number().min(1, 'Select a quantit'),
    }),
  ),
})

export type CreateSaleType = z.infer<typeof createSaleSchema>

function CreateSaleModal({ handleModal }: { handleModal: () => void }) {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<CreateSaleType>({
    resolver: zodResolver(createSaleSchema),
    defaultValues: {
      products: [
        {
          id: 0,
          quantity: 0,
        },
      ],
    },
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'products',
  })

  const { products: productsList } = useProducts({ page: 1, limit: 1000 })
  const { createSaleFn } = useCreateSale()

  const products = watch('products')

  function addNewProduct() {
    const lastProductIndex = products.length - 1
    const lastProduct = products[lastProductIndex]
    const isLastProductDirty = dirtyFields.products?.[lastProductIndex]
    const isLastProductDefault =
      lastProduct.id === 0 && lastProduct.quantity === 0

    if (isLastProductDirty && !isLastProductDefault)
      append({ id: 0, quantity: 0 })
  }

  function handleCreateSale({ products }: CreateSaleType) {
    createSaleFn({ products })
    reset()
    handleModal()
  }

  return (
    <DialogContent className="max-h-[90vh] overflow-auto">
      <DialogTitle>Create a sale</DialogTitle>
      <DialogDescription className="sr-only">
        Modal for creating a sale
      </DialogDescription>

      {productsList && productsList.length ? (
        <form
          onSubmit={handleSubmit(handleCreateSale)}
          className="flex flex-col gap-4"
        >
          {fields.map((field, i) => (
            <div key={i} className="grid grid-cols-create-sale gap-4">
              <Controller
                control={control}
                name={`products.${i}.id`}
                render={({ field: { onChange, value } }) => (
                  <div className="space-y-1">
                    <Label>Product</Label>
                    <Select onValueChange={onChange} value={String(value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={'Select a product'} />
                      </SelectTrigger>
                      <SelectContent>
                        {productsList?.map((product) => {
                          const isDisabled = products.some((p) => {
                            console.log(p)
                            return Number(p.id) === Number(product.id)
                          })

                          return product.quantity > 0 ? (
                            <SelectItem
                              key={product.id}
                              value={String(product.id)}
                              disabled={isDisabled}
                            >
                              {product.name}
                            </SelectItem>
                          ) : (
                            ''
                          )
                        })}
                      </SelectContent>
                    </Select>
                    <FormError error={errors?.products?.[i]?.id} />
                  </div>
                )}
              />

              <ProductQuantityController
                productId={products?.[i]?.id}
                name={`products.${i}.quantity`}
                control={control}
                errors={errors?.products?.[i]?.quantity}
              />
            </div>
          ))}

          <button
            type="button"
            onClick={() => addNewProduct()}
            className="mb-10 mt-4 flex w-max items-center gap-2 text-sm font-bold"
          >
            new product <Plus size={10} className="text-foreground" />
          </button>

          <Button type="submit" className="w-max">
            Create sale
          </Button>
        </form>
      ) : (
        <p className="text-foreground/60">
          No product yet. Please create a product before creating a sale
        </p>
      )}
    </DialogContent>
  )
}

export { CreateSaleModal }
