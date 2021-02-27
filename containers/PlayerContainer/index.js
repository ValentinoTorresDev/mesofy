import { gql, useMutation } from '@apollo/client'
import Player from '@organisms/Player'

const likeMutation = gql`
  mutation likeMutation($id: ID!, $like: Boolean!){
    updateSong(
      where: {id: $id},
      data: {like: $like}
    ) {
      id
    }
  }
`

const PlayerContainer = (props) => {
  const [toggleLike] = useMutation(likeMutation)
  return (
    <Player
      toggleLike={toggleLike}
      {...props}
    />
  )
}

export default PlayerContainer
