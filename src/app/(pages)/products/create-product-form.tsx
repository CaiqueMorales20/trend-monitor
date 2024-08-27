import { Controller } from 'react-hook-form'

import { ControlledSelect } from '@/components/controlled-select'
import { FormError } from '@/components/form-error'
import { QuantityInput } from '@/components/quantity-input'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCategories } from '@/hooks/useCategories'
import { useProductForm } from '@/hooks/useProductForm'

function CreateProductForm() {
  const { categories } = useCategories()
  const { register, handleSubmit, handleCreateNewProduct, control, errors } =
    useProductForm()

  return (
    <form
      onSubmit={handleSubmit(handleCreateNewProduct)}
      className="flex flex-col gap-4"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register('name')} placeholder="Name..." />
        <FormError error={errors.name} />
      </div>

      <div className="space-y-2">
        <Label>Category</Label>
        <ControlledSelect
          control={control}
          name="categoryId"
          data={categories}
        />
        <FormError error={errors.categoryId} />
      </div>

      <div className="grid grid-cols-create-sale gap-2">
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            {...register('price')}
            type="number"
            placeholder="Price..."
          />
          <FormError error={errors.price} />
        </div>

        <div className="space-y-2">
          <Label>Quantity</Label>
          <Controller
            name="quantity"
            control={control}
            render={({ field: { onChange, value } }) => (
              <QuantityInput
                onDecrease={() => onChange(value > 0 ? value - 1 : 0)}
                onIncrease={() => onChange(value + 1)}
                value={value}
              />
            )}
          />
          <FormError error={errors.quantity} />
        </div>
      </div>

      <Button className="mt-10 w-max">Create product</Button>
    </form>
  )
}

export { CreateProductForm }
