import Title from '@atoms/Title'
import { ContainerListAlbums, StyledListAlbums } from './styles'

const ListAlbums = () => {
  return (
    <ContainerListAlbums>
      <Title m='0 0 1.25rem 0'>
        ALBUMS
      </Title>
      <StyledListAlbums>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
      </StyledListAlbums>
    </ContainerListAlbums>
  )
}

export default ListAlbums
