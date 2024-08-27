import { Control, Controller } from 'react-hook-form'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

interface ControlledSelectProps {
  name: string
  // eslint-disable-next-line
  control: Control<any>
  data: { id: number; name: string }[]
}

function ControlledSelect({ name, control, data }: ControlledSelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select onValueChange={onChange} value={String(value)}>
          <SelectTrigger>
            <SelectValue placeholder={'Select a category'} />
          </SelectTrigger>
          <SelectContent>
            {data?.map((dataItem) => (
              <SelectItem key={dataItem.id} value={String(dataItem.id)}>
                {dataItem.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  )
}

export { ControlledSelect }
