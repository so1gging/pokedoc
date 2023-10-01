import { CommonBasicType } from '@/libs/apis/common/models'

interface DetailBaseStatsProps {
  stats: {
    base_stat: number
    effort: number
    stat: CommonBasicType
  }[]
}
export default function DetailBaseStats({ stats }: DetailBaseStatsProps) {
  console.log(stats)

  const StatsBar = ({ percentage }: { percentage: number }) => {
    return (
      <div className="h-4 flex items-center w-full">
        <div className="w-full h-1 bg-grayscale-background relative rounded-md">
          <div className="h-1 absolute bg-grayscale-wireframe rounded-md" style={{ width: `${percentage}%` }} />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="text-subtitle1 text-grayscale-wireframe">Base Stats</div>
      <div className="flex gap-2.5 w-full">
        <div className="flex flex-col">
          <span className="text-subtitle3 text-grayscale-wireframe h-4 text-right">HP</span>
          <span className="text-subtitle3 text-grayscale-wireframe h-4 text-right">ATK</span>
          <span className="text-subtitle3 text-grayscale-wireframe h-4 text-right">DEF</span>
          <span className="text-subtitle3 text-grayscale-wireframe h-4 text-right">SATK</span>
          <span className="text-subtitle3 text-grayscale-wireframe h-4 text-right">SDEF</span>
          <span className="text-subtitle3 text-grayscale-wireframe h-4 text-right">SPD</span>
        </div>
        <div className="w-0.5 bg-grayscale-light" />
        <div className="flex flex-col flex-1">
          {stats.map((item) => (
            <div key={item.stat.name} className="flex w-full items-center gap-1.5">
              <span className="text-body3 leading-4">{item.base_stat}</span>
              <StatsBar percentage={item.base_stat} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
