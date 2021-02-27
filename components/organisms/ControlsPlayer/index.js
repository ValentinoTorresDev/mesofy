import Next from '@icons/Next'
import Pause from '@icons/Pause'
import Play from '@icons/Play'
import Previous from '@icons/Previous'
import { useAppContext } from '@context/index'
import { StyledControls, ButtonNextPrevious, ButtonPLayPause } from './styles'

const ControlsPlayer = () => {
  const {
    song,
    setSong,
    playlist,
    positionPlaylist,
    setPositionPlaylist,
    playing,
    setPlaying
  } = useAppContext()

  const setInit = () => {
    setSong({
      id: playlist[0].id,
      audio: playlist[0].audio.url,
      image: playlist[0].image.url,
      title: playlist[0].title,
      idAlbum: playlist[0].album.id
    })
    setPositionPlaylist(0)
  }

  const setLast = () => {
    if (positionPlaylist !== 0) {
      setSong({
        id: playlist[playlist.length - 1].id,
        audio: playlist[playlist.length - 1].audio.url,
        image: playlist[playlist.length - 1].image.url,
        title: playlist[playlist.length - 1].title,
        idAlbum: playlist[positionPlaylist - 1].album.id
      })
      setPositionPlaylist(playlist.length - 1)
    } else {
      setInit()
    }
  }

  const HandlePreviousSong = () => {
    if (playlist[positionPlaylist].album.id === song.idAlbum) {
      if (positionPlaylist !== 0) {
        setSong({
          id: playlist[positionPlaylist - 1].id,
          audio: playlist[positionPlaylist - 1].audio.url,
          image: playlist[positionPlaylist - 1].image.url,
          title: playlist[positionPlaylist - 1].title,
          idAlbum: playlist[positionPlaylist - 1].album.id
        })
        setPositionPlaylist(positionPlaylist - 1)
      } else {
        setLast()
      }
    } else {
      setInit()
    }
  }

  const HandleNextSong = () => {
    if (playlist[positionPlaylist].album.id === song.idAlbum) {
      if ((playlist.length - 1) > positionPlaylist) {
        setSong({
          id: playlist[positionPlaylist + 1].id,
          audio: playlist[positionPlaylist + 1].audio.url,
          image: playlist[positionPlaylist + 1].image.url,
          title: playlist[positionPlaylist + 1].title,
          idAlbum: playlist[positionPlaylist + 1].album.id
        })
        setPositionPlaylist(positionPlaylist + 1)
      } else {
        setInit()
      }
    } else {
      setInit()
    }
  }
  return (
    <StyledControls>
      <ButtonNextPrevious
        onClick={HandlePreviousSong}
      >
        <Previous
          stroke='#115DEF'
        />
      </ButtonNextPrevious>
      <ButtonPLayPause
        onClick={() => { setPlaying(!playing) }}
      >
        {playing
          ? <Pause
              stroke='#115DEF'
              width={16}
              height={16}
            />
          : <Play
              stroke='#115DEF'
              width={16}
              height={16}
            />}
      </ButtonPLayPause>
      <ButtonNextPrevious
        onClick={HandleNextSong}
      >
        <Next
          stroke='#115DEF'
        />
      </ButtonNextPrevious>
    </StyledControls>
  )
}

export default ControlsPlayer
