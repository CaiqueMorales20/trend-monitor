import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'

import { CreateProductForm } from './create-product-form'

function CreateProductModal({ handleModal }: { handleModal: () => void }) {
  return (
    <DialogContent>
      <DialogTitle>Create a product</DialogTitle>
      <DialogDescription className="sr-only">
        Modal for creating a product
      </DialogDescription>

      <CreateProductForm handleModal={handleModal} />
    </DialogContent>
  )
}

export { CreateProductModal }
