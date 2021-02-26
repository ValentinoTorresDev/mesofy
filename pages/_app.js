import { ThemeProvider } from 'styled-components'
import Layout from '@atoms/Layout'
import ApolloCLient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import GlobalStyles from '@styles/globalStyles'
import Theme from '@styles/theme'
import { AppContextProvider } from '@context/contextTabs'

const client = new ApolloCLient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckllo3ei9z80k01z35dfi2885/master'
})

export default function App ({ Component, pageProps }) {
  return (
    <ApolloProvider
      client={client}
    >
      <AppContextProvider>
        <Layout>
          <GlobalStyles />
          <ThemeProvider theme={Theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </AppContextProvider>
    </ApolloProvider>
  )
}
