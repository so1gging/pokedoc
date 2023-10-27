import { PropsWithChildren } from 'react'

export default function Root({ children }: PropsWithChildren) {
  return <div className="w-screen h-screen bg-white flex justify-center overflow-hidden">{children}</div>
}
