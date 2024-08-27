import { FieldError } from 'react-hook-form'

function FormError({ error }: { error: FieldError | undefined }) {
  return (
    error && <span className="text-xs text-red-500"> {error.message} </span>
  )
}

export { FormError }
