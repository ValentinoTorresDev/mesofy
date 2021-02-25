import Text from '@atoms/Text'
import Title from '@atoms/Title'
import { ContainerAbout } from './styles'

const About = () => {
  return (
    <ContainerAbout>
      <Title>
        Los mesoneros
      </Title>
      <Text
        m='1rem 0 0 0'
      >
        Los Mesoneros es una banda de Caracas, Venezuela, ahora residenciada en la Ciudad De México. En su corta trayectoria han logrado posicionarse como líderes del género alternativo en su país. Fueron nominados para 4 Latín Grammys, con su disco debut, incluyendo la renombrada categoría de “Mejor Artista Nuevo” y ganaron mejor disco de Rock, en los premios Pepsi Music. Actualmente se encuentras girando por el mundo, y promoviendo su más reciente sencillo “Pangea”.
      </Text>
    </ContainerAbout>
  )
}

export default About
