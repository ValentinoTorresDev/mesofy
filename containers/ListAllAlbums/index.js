import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import ListAlbums from '@organisms/ListAlbums'

const getAlbums = gql`
  query getAlbums{
    albums {
      title
      id
      image{
        url
      }
    } 
  }
`

const ListAllAlbums = () => {
  const { loading, error, data } = useQuery(getAlbums)

  return (
    <ListAlbums
      data={data}
      loading={loading}
      error={error}
    />
  )
}

export default ListAllAlbums
