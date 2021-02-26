import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import ListMusic from '@organisms/ListMusic'

const getSongs = gql`
  query getSongs{
    songs{
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
        title
      }
    }    
  }
`

const ListAllMusic = (props) => {
  const { loading, error, data } = useQuery(getSongs)

  return (
    <ListMusic
      title='Todos los albums'
      data={data}
      loading={loading}
      error={error}
      duration={props.duration}
      progress={props.progress}
    />
  )
}

export default ListAllMusic
