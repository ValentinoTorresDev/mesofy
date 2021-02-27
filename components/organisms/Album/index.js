import { ContainerAlbum, NameAlbum } from './styles'

const Album = (props) => {
  return (
    <ContainerAlbum
      onClick={props.onClick}
      {...props}
    >
      <NameAlbum>
        {props.nameAlbum}
      </NameAlbum>
    </ContainerAlbum>
  )
}

Album.defaultProps = {
  image: 'pangea.jpg',
  nameAlbum: 'Pangea'
}

export default Album
