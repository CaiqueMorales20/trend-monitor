'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Minus, Plus } from 'lucide-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

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
import { useCreateSale } from '@/hooks/useCreateSale'
import { useProducts } from '@/hooks/useProducts'

const createSaleSchema = z.object({
  products: z.array(
    z.object({
      id: z.coerce.number().min(1, 'Select a product'),
      quantity: z.number().min(1, 'Select a quantit'),
    }),
  ),
})

type CreateSaleType = z.infer<typeof createSaleSchema>

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

  const { data: productsList } = useProducts()
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

  function decreaseQuantity(value: number) {
    if (value === 0) return
    return value - 1
  }

  function handleCreateSale({ products }: CreateSaleType) {
    console.log('products', products)
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
                      {productsList?.map((product) => (
                        <SelectItem
                          key={product.id}
                          value={product.id.toString()}
                        >
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors?.products?.[i]?.id ? (
                    <p className="text-xs text-red-500">
                      {errors.products[i].id.message}
                    </p>
                  ) : (
                    ''
                  )}
                </div>
              )}
            />

            <Controller
              control={control}
              name={`products.${i}.quantity`}
              render={({ field: { onChange, value } }) => (
                <div className="space-y-1">
                  <Label>Quantity</Label>
                  <div className="flex h-10 w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-3 py-2">
                    <button
                      type="button"
                      onClick={() => onChange(decreaseQuantity(value))}
                      className="p-2"
                    >
                      <Minus size={18} />
                    </button>
                    <span>{JSON.stringify(value)}</span>
                    <button
                      type="button"
                      onClick={() => onChange(value + 1)}
                      className="p-2"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  {errors?.products?.[i]?.quantity ? (
                    <p className="text-xs text-red-500">
                      {errors.products[i].quantity.message}
                    </p>
                  ) : (
                    ''
                  )}
                </div>
              )}
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
    </DialogContent>
  )
}

export { CreateSaleModal }
