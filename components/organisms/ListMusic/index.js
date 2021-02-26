import { useState } from 'react'
import Title from '@atoms/Title'
import Song from '@organisms/Song'
import { useAppContext } from '@context/contextTabs'
import { ListMusic, ListItemItemMusic } from './styles'

const ListAllMusic = (props) => {
  const { setSong } = useAppContext()
  const [reproducing, setRepoducing] = useState(false)

  return (
    <>
      <Title
        m='0 0 1.25rem 0'
      >
        {props.title}
      </Title>
      <ListMusic>
        {!props.loading && props.data.songs.map((song, i) => {
          return (
            <ListItemItemMusic key={i}>
              <Song
                number={i + 1}
                title={song.title}
                duration='03:33'
                reproducing={reproducing === i}
                onClick={() => {
                  setSong(song.file.url)
                  setRepoducing(i)
                }}
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
