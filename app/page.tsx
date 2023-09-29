import Typography from '@/components/Typography'
import Badge from '@/components/Badge'

export default function Home() {
  return (
    <main className="text">
      <Typography text="123" />
      <Typography variant="caption" text="123" />
      <Badge type="Bug" text="벌레" />
    </main>
  )
}
