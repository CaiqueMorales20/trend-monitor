import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const productFormSchema = z.object({
  name: z.string().min(1, 'Insert a name'),
  quantity: z.coerce.number().min(1, 'Select a quantity'),
  price: z.coerce.number().min(1, 'Insert a price'),
  categoryId: z.coerce.number().min(1, 'Select a category'),
})

type ProductFormType = z.infer<typeof productFormSchema>

function useProductForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ProductFormType>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: '',
      categoryId: 0,
      quantity: 0,
    },
  })

  function handleCreateNewProduct(data: ProductFormType) {
    console.log(data)
  }

  return {
    register,
    handleSubmit,
    reset,
    errors,
    control,
    handleCreateNewProduct,
  }
}

export { useProductForm }
