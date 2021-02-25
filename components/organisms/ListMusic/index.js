import { useState } from 'react'
import Title from '@atoms/Title'
import Song from '@organisms/Song'
import { ListMusic, ListItemItemMusic } from './styles'

const ListAllMusic = (props) => {
  const [reproducing, setRepoducing] = useState(false)
  const test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <Title
        m='0 0 1.25rem 0'
      >
        {props.title}
      </Title>
      <ListMusic>
        {test.map((song, i) => {
          return (
            <ListItemItemMusic key={i}>
              <Song
                number={i + 1}
                title='Te lo advertí'
                duration='03:33'
                reproducing={reproducing === i}
                onClick={() => setRepoducing(i)}
              />
            </ListItemItemMusic>
          )
        })}
      </ListMusic>
    </>
  )
}

ListAllMusic.defaultProps = {
  title: 'title'
}

export default ListAllMusic
