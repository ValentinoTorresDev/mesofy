import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import About from '@molecules/About'
import Header from '@molecules/Header'
import Tabs from '@molecules/Tabs'
import CardArtist from '@organisms/CardArtist'
import Albums from '@organisms/ListAlbums'
import ListMusic from '@organisms/ListMusic'
import Player from '@organisms/Player'
import { useAppContext } from '@context/contextTabs'
import { ContainerHome, ContentTabs } from './styles'

const getSongs = gql`
query getSongs{
    songs{
      title
      image{
        url
      }
      file{
        url
      }
      like
      reproductions
      album {
        title
      }
    }    
  }
`

const Home = () => {
  const { tab } = useAppContext()
  const { loading, error, data } = useQuery(getSongs)

  return (
    <ContainerHome>
      <Header />
      <CardArtist />
      <Tabs />
      <ContentTabs>
        {tab === 'todo' &&
          <ListMusic
            title='Canciones'
            data={data}
            loading={loading}
          />}
        {tab === 'popular' &&
          <ListMusic
            title='Populares'
          />}
        {tab === 'acercaDe' && <About />}
      </ContentTabs>
      <Albums />
      <Player />
    </ContainerHome>
  )
}

export default Home
