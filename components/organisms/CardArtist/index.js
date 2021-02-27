import Image from 'next/image'
import Button from '@atoms/Button'
import { useAppContext } from '@context/index'
import {
  ContainerCardArtist,
  StyledCardArtist,
  InfoBand,
  Listenners,
  TitleBand,
  DescriptionBand,
  FooterCardArtist,
  ContainerPLayFavourite,
  Followers
} from './styles'

const CardArtist = () => {
  const { playing, setPlaying } = useAppContext()
  return (
    <ContainerCardArtist>
      <StyledCardArtist>
        <Image
          src='/images/bandImage.jpg'
          width={256}
          height={256}
        />
        <InfoBand>
          <div>
            <Listenners>
              279 802 REPRODUCCIONES
            </Listenners>
            <TitleBand>
              Los Mesoneros
            </TitleBand>
            <DescriptionBand>
              Los Mesoneros es una banda de Caracas, Venezuela, ahora residenciada en la Ciudad De México. En su corta trayectoria han logrado posicionarse como líderes del género alternativo en su país. Fueron nominados para 4 Latín Grammys, con su disco debut, incluyendo la renombrada categoría de “Mejor Artista Nuevo” y ganaron mejor disco...
            </DescriptionBand>
          </div>
          <FooterCardArtist>
            <ContainerPLayFavourite>
              <Button
                onClick={() => setPlaying(!playing)}
                playing={playing}
              >
                REPRODUCIR
              </Button>
            </ContainerPLayFavourite>
            <Followers>
              93.089   —   Seguidores
            </Followers>
          </FooterCardArtist>
        </InfoBand>
      </StyledCardArtist>
    </ContainerCardArtist>
  )
}

export default CardArtist
