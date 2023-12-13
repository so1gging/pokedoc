export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[352px] rounded overflow-auto bg-white">
      <div className="w-full flex flex-col items-center">{children}</div>
    </div>
  )
}
