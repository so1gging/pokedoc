'use client'
import Checked from '@/assets/icons/radio-checked.svg'
interface RadioProps {
  id: string
  name?: string
  label?: string
  defaultChecked?: boolean
  onChange?: () => void
}

export default function Radio({ id, name, label, defaultChecked = false, onChange }: RadioProps) {
  const handleChange = () => {
    onChange?.()
  }

  return (
    <div className="flex gap-2 items-center">
      <input
        id={id}
        name={name}
        className="relative peer shrink-0 appearance-none w-8 h-8 border-2 border-identity-primary rounded-full bg-white focus:hidden"
        type="radio"
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
