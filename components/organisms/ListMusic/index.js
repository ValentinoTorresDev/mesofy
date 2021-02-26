import { useState } from 'react'
import Title from '@atoms/Title'
import Song from '@organisms/Song'
import { useAppContext } from '@context/index'
import { ListMusic, ListItemItemMusic } from './styles'

const ListAllMusic = (props) => {
  const { loading, data } = props
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
        {!loading && data.songs.map((song, i) => {
          return (
            <ListItemItemMusic key={i}>
              <Song
                number={i + 1}
                title={song.title}
                duration={song.duration}
                durationProgress={props.duration}
                progress={props.progress}
                reproducing={reproducing === i}
                onClick={() => {
                  setSong({
                    audio: song.audio.url,
                    image: song.image.url,
                    title: song.title
                  })
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
