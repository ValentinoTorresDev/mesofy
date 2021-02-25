import Image from 'next/image'
import Button from '@atoms/Button'
import ButtonIcon from '@atoms/ButtonIcon'
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
              <Button>
                REPRODUCIR
              </Button>
              <ButtonIcon
                m='0 0 0 .5rem'
              />
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
