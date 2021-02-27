import { useState } from 'react'
import Title from '@atoms/Title'
import Song from '@organisms/Song'
import { useAppContext } from '@context/index'
import { ListMusic, ListItemItemMusic } from './styles'

const ListAllMusic = (props) => {
  const { loading, data } = props
  const { song, setSong, setPositionPlaylist } = useAppContext()

  return (
    <>
      <Title
        m='0 0 1.25rem 0'
      >
        {props.title}
      </Title>
      <ListMusic>
        {!loading && data.songs.map((songItem, i) => {
          return (
            <ListItemItemMusic key={i}>
              <Song
                number={i + 1}
                title={songItem.title}
                duration={songItem.duration}
                durationProgress={props.duration}
                progress={props.progress}
                reproducing={songItem.id === song.id}
                onClick={() => {
                  setSong({
                    id: songItem.id,
                    audio: songItem.audio.url,
                    image: songItem.image.url,
                    title: songItem.title,
                    idAlbum: songItem.album.id
                  })
                  setPositionPlaylist(i)
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
