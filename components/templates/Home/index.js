import Header from '@molecules/Header'
import Tabs from '@molecules/Tabs'
import CardArtist from '@organisms/CardArtist'
import { ContainerHome } from './styles'

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <CardArtist />
      <Tabs />
    </ContainerHome>
  )
}

export default Home
