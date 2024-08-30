import { Control, Controller, FieldError } from 'react-hook-form'

import { FormError } from '@/components/form-error'
import { QuantityInput } from '@/components/quantity-input'
import { Label } from '@/components/ui/label'
import { useProduct } from '@/hooks/use-product'

interface ProductQuantityControllerProps {
  // eslint-disable-next-line
  control: Control<any>
  name: string
  productId: number

  errors?: FieldError
}

function ProductQuantityController({
  control,
  name,
  productId,
  errors,
}: ProductQuantityControllerProps) {
  const { product } = useProduct({ id: productId })

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className="space-y-1">
          <Label>Quantity</Label>
          <QuantityInput
            onDecrease={() => onChange(value > 0 ? value - 1 : 0)}
            onIncrease={() =>
              onChange(value < product!.quantity ? value + 1 : value)
            }
            value={value}
          />
          <FormError error={errors} />
        </div>
      )}
    />
  )
}

export { ProductQuantityController }
