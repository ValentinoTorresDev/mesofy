import { useState } from 'react'
import About from '@molecules/About'
import Header from '@molecules/Header'
import Tabs from '@molecules/Tabs'
import CardArtist from '@organisms/CardArtist'
import Albums from '@organisms/ListAlbums'
import ListMusic from '@organisms/ListMusic'
import Player from '@organisms/Player'
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
      <Albums />
      <Player
        duration={duration}
        setDuration={setDuration}
        progress={progress}
        setProgress={setProgress}
      />
    </ContainerHome>
  )
}

export default Home
