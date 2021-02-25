import About from '@molecules/About'
import Header from '@molecules/Header'
import Tabs from '@molecules/Tabs'
import CardArtist from '@organisms/CardArtist'
import Albums from '@organisms/ListAlbums'
import ListMusic from '@organisms/ListMusic'
import { useAppContext } from '@context/contextTabs'
import { ContainerHome, ContentTabs } from './styles'

const Home = () => {
  const { tab } = useAppContext()

  return (
    <ContainerHome>
      <Header />
      <CardArtist />
      <Tabs />
      <ContentTabs>
        {tab === 'todo' &&
          <ListMusic
            title='Canciones'
          />}
        {tab === 'popular' &&
          <ListMusic
            title='Populares'
          />}
        {tab === 'acercaDe' && <About />}
      </ContentTabs>
      <Albums />
    </ContainerHome>
  )
}

export default Home
