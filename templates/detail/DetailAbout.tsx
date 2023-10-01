import IconWeight from '@/assets/icons/weight.svg'
import IconHeight from '@/assets/icons/straighten.svg'

interface DetailAboutProps {
  weight: number
  height: number
  abilities: string[]
}
export default function DetailAbout({ weight, height, abilities }: DetailAboutProps) {
  const Weight = () => {
    return (
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-center gap-2">
          <IconWeight width={16} height={16} />
          <span className="text-body3">{weight} kg</span>
        </div>
        <div className="text-caption text-center text-grayscale-medium">weight</div>
      </div>
    )
  }

  const Height = () => {
    return (
      <div className="border-x-2 flex flex-col justify-between">
        <div className="flex items-center justify-center gap-2">
          <IconHeight width={16} height={16} />
          <span className="text-body3">{height} m</span>
        </div>
        <div className="text-caption text-center text-grayscale-medium">height</div>
      </div>
    )
  }

  const Ability = () => {
    return (
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-center">
          {abilities.map((item) => (
            <span key={`ability-${item}`} className="text-body3 leading-4">
              {item}
            </span>
          ))}
        </div>
        <div className="text-caption text-center text-grayscale-medium">ability</div>
      </div>
    )
  }

  return (
    <>
      <div className="text-subtitle1 text-grayscale-wireframe">About</div>
      <div className="w-full grid grid-cols-3">
        <Weight />
        <Height />
        <Ability />
      </div>
    </>
  )
}
