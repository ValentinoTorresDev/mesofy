import { ThemeProvider } from 'styled-components'
import Layout from '@atoms/Layout'
import GlobalStyles from '@styles/globalStyles'
import Theme from '@styles/theme'

export default function App ({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  )
}
