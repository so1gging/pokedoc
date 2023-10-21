import { PropsWithChildren } from 'react'

export default function DetailContents({ children }: PropsWithChildren) {
  return <div className="w-full flex flex-col gap-4 items-center pt-20 px-5">{children}</div>
}
