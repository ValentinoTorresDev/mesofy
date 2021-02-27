import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import ListMusic from '@organisms/ListMusic'
import { useAppContext } from '@context/index'

const getAlbumSongs = gql`
  query getAlbumSongs($id: ID!){
    values: album(where: {id: $id}){
      songs{
        id
        title
        image{
          url
        }
        audio{
          url
        }
        like
        duration
        reproductions
        album {
          id
          title
        }
      } 
    }
  }
`

const ListAllMusic = (props) => {
  const { idPlaylist, setPlaylist, setLoadingPlaylist } = useAppContext()
  const { loading, error, data } = useQuery(getAlbumSongs, {
    variables: { id: idPlaylist }
  })

  setPlaylist(!loading && data.values.songs)
  setLoadingPlaylist(loading)

  return (
    <ListMusic
      title='Todos los albums'
      data={!loading && data.values}
      loading={loading}
      error={error}
      duration={props.duration}
      progress={props.progress}
    />
  )
}

export default ListAllMusic
