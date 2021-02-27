import { useState } from 'react'
import About from '@molecules/About'
import Header from '@molecules/Header'
import Tabs from '@molecules/Tabs'
import CardArtist from '@organisms/CardArtist'
import ListAllAlbums from '@containers/ListAllAlbums'
import ListMusic from '@organisms/ListMusic'
import PlayerContainer from '@containers/PlayerContainer'
import ListAllMusic from '@containers/ListAllMusic'
import { useAppContext } from '@context/index'
import { ContainerHome, ContentTabs } from './styles'

const Home = () => {
  const { tab } = useAppContext()
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)

  return (
    <ContainerHome>
      <Header />
      <CardArtist />
      <Tabs />
      <ContentTabs>
        {tab === 'todo' &&
          <ListAllMusic
            duration={duration}
            progress={progress}
          />}
        {tab === 'popular' &&
          <ListMusic
            title='Populares'
          />}
        {tab === 'acercaDe' && <About />}
      </ContentTabs>
      <ListAllAlbums />
      <PlayerContainer
        duration={duration}
        setDuration={setDuration}
        progress={progress}
        setProgress={setProgress}
      />
    </ContainerHome>
  )
}

export default Home
