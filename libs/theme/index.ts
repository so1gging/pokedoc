import { graph_colors, main_colors, pokemon_type_colors } from '~/libs/theme/colors'

export const fontFamily = `'Pretendard', sans-serif`

const fontSize = {
  head: '24px',
  subtitle1: '14px',
  subtitle2: '12px',
  subtitle3: '10px',
  body1: '14px',
  body2: '12px',
  body3: '10px',
  caption: '8px',
}

const fontWeight = {
  head: 'bold',
  subtitle1: 'bold',
  subtitle2: 'bold',
  subtitle3: 'bold',
  body1: 'regular',
  body2: 'regular',
  body3: 'regular',
  caption: 'regular',
}

const lineHeight = {
  head: '32px',
  subtitle1: '16px',
  subtitle2: '16px',
  subtitle3: '16px',
  body1: '16px',
  body2: '16px',
  body3: '16px',
  caption: '12px',
}

const theme = {
  main_colors,
  pokemon_type_colors,
  graph_colors,
  fontSize,
  fontWeight,
  lineHeight,
}

export default theme
