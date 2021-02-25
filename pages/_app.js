import { ThemeProvider } from 'styled-components'
import Layout from '@atoms/Layout'
import GlobalStyles from '@styles/globalStyles'
import Theme from '@styles/theme'
import { AppContextProvider } from '@context/contextTabs'

export default function App ({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <GlobalStyles />
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </AppContextProvider>
  )
}
