import { PropsWithChildren } from 'react'

export default function LootRayout({ children }: PropsWithChildren) {
  return <div className="w-screen h-screen bg-identity-primary flex justify-center overflow-hidden">{children}</div>
}
