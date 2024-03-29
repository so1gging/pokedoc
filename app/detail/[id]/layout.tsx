export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded overflow-auto bg-white">
      <div className="w-full flex flex-col items-center">{children}</div>
    </div>
  )
}
