interface TypographyProps {
  variant?: 'headline' | 'subtitle1' | 'subtitle2' | 'subtitle3' | 'body1' | 'body2' | 'body3' | 'caption'
  text: string | null | undefined
}

export default function Typography({ variant = 'body1', text }: TypographyProps) {
  return <p className={`text-${variant}`}>{text}</p>
}
