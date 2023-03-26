import type { AppProps } from 'next/app'
import theme from '~/libs/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '~/components/GlobalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
