import Checked from '@/assets/icons/checkbox-checked.svg'
interface CheckboxProps {
  id: string
  label?: string
  defaultChecked?: boolean
  onChange?: () => void
}

export default function Checkbox({ id, label, defaultChecked = false, onChange }: CheckboxProps) {
  const handleChange = () => {
    onChange?.()
  }

  return (
    <div className="flex gap-2 items-center">
      <input
        id={id}
        className="relative peer shrink-0 appearance-none w-8 h-8 border-2 border-identity-primary rounded-sm bg-white checked:bg-identity-primary"
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={handleChange}
      />
      <label htmlFor={id} className="text-body3">
        {label}
      </label>
      <Checked className="absolute hidden peer-checked:block pointer-events-none" />
    </div>
  )
}
