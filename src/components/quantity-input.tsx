import { Minus, Plus } from 'lucide-react'

interface QuantityInputProps {
  onDecrease: () => void
  onIncrease: () => void
  value: number
}

function QuantityInput({ onDecrease, onIncrease, value }: QuantityInputProps) {
  return (
    <div className="flex h-10 w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-3 py-2">
      <button type="button" onClick={onDecrease} className="p-2">
        <Minus size={18} />
      </button>
      <span>{JSON.stringify(value)}</span>
      <button type="button" onClick={onIncrease} className="p-2">
        <Plus size={18} />
      </button>
    </div>
  )
}

export { QuantityInput }
