import Title from '@atoms/Title'
import Album from '@organisms/Album'
import { useAppContext } from '@context/index'
import { ContainerListAlbums, StyledListAlbums, ListItemItemAlbum } from './styles'

const ListAlbums = (props) => {
  const { loading, data } = props
  const { setIdPlaylist, setPositionPlaylist } = useAppContext()

  const handleChangeAlbum = (id) => {
    setIdPlaylist(id)
    setPositionPlaylist(0)
  }

  return (
    <ContainerListAlbums>
      <Title m='0 0 1.25rem 0'>
        ALBUMS
      </Title>
      <StyledListAlbums>
        {!loading && data.albums.map((album, i) => {
          return (
            <ListItemItemAlbum
              key={i}
            >
              <Album
                nameAlbum={album.title}
                image={album.image.url}
                onClick={() => {
                  handleChangeAlbum(album.id)
                }}
              />
            </ListItemItemAlbum>
          )
        })}
      </StyledListAlbums>
    </ContainerListAlbums>
  )
}

export default ListAlbums
