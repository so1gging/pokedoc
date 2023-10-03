import { CSSProperties } from 'react'

interface SkeletonProps {
  type?: 'image' | 'text'
  width: CSSProperties['width']
  height: CSSProperties['height']
}

const ImageSkeleton = ({ width, height }: SkeletonProps) => {
  return (
    <div
      className="flex items-center justify-center bg-grayscale-wireframe rounded-full dark:bg-grayscale-light"
      style={{ width, height }}
    >
      <svg
        className="w-5 h-5 text-grayscale-wireframe dark:text-grayscale-wireframe"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="#666"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </div>
  )
}

const TextSkeleton = ({ width, height }: SkeletonProps) => {
  return <div className="bg-grayscale-wireframe rounded-full dark:bg-grayscale-light" style={{ width, height }} />
}

export default function Skeleton({ type = 'text', width, height }: SkeletonProps) {
  return (
    <div role="status" className="animate-pulse">
      {type === 'text' ? (
        <TextSkeleton width={width} height={height} />
      ) : (
        <ImageSkeleton width={width} height={height} />
      )}
    </div>
  )
}
