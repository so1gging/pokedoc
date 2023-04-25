import styled from 'styled-components'
import theme from '~/libs/theme'

type VariantType = 'head' | 'subtitle1' | 'subtitle2' | 'subtitle3' | 'body1' | 'body2' | 'body3' | 'caption'

const Typography = styled.span<{ variant: VariantType }>`
  font-size: ${({ variant }) => theme.fontSize[variant]};
  font-weight: ${({ variant }) => theme.fontWeight[variant]};
  line-height: ${({ variant }) => theme.lineHeight[variant]};
`

export default Typography
