import Title from '@atoms/Title'
import Album from '@organisms/Album'
import { ContainerListAlbums, StyledListAlbums, ListItemItemAlbum } from './styles'

const ListAlbums = () => {
  const test = [
    { name: 'Pangea', image: 'pangea.jpg' },
    { name: 'Caiga la Noche', image: 'caigaLaNoche.jpg' },
    { name: 'Indeleble', image: 'indeleble.jpg' },
    { name: 'Te lo advertí', image: 'teLoAdverti.jpg' }
  ]
  return (
    <ContainerListAlbums>
      <Title m='0 0 1.25rem 0'>
        ALBUMS
      </Title>
      <StyledListAlbums>
        {test.map((album, i) => {
          return (
            <ListItemItemAlbum
              key={i}
            >
              <Album
                nameAlbum={album.name}
                image={album.image}
              />
            </ListItemItemAlbum>
          )
        })}
      </StyledListAlbums>
    </ContainerListAlbums>
  )
}

export default ListAlbums
