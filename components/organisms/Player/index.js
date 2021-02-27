import { useState, useEffect, useRef } from 'react'
import ReactHowler from 'react-howler'
import raf from 'raf'
import ButtonIcon from '@atoms/ButtonIcon'
import ImageTitleSong from '@molecules/ImageTitleSong'
import ControlsPlayer from '@organisms/ControlsPlayer'
import BarProgress from '@organisms/BarProgress'
import ControlVolume from '@organisms/ControlVolume'
import { useAppContext } from '@context/index'
import { ContainerPlayer, ContainerControls, ContainerControlVolumeAndLike } from './styles'
import secondsToMinutes from '@utils/secondsToMinutes'

const Player = (props) => {
  const {
    song,
    playlist,
    positionPlaylist,
    playing,
    loadingPlaylist
  } = useAppContext()
  const refPlayer = useRef(null)
  const [durationText, setDurationText] = useState('0:00')
  const [lapsedText, setLapsedText] = useState('0:00')
  const [volume, setVolume] = useState(0.5)
  const [like, setLike] = useState(false)

  useEffect(() => {
    setLike(!loadingPlaylist && playlist[positionPlaylist].like)
    return () => raf.cancel(handleLapsedText)
  }, [!loadingPlaylist, song.id])

  const handleDurationText = () => {
    props.setDuration(Math.round(refPlayer.current.duration()))
    setDurationText(secondsToMinutes(refPlayer.current.duration()))
  }

  const handleLapsedText = () => {
    setLapsedText(secondsToMinutes(refPlayer.current.seek()))
    props.setProgress(Math.round(refPlayer.current.seek()))
    raf(handleLapsedText)
  }

  const handleLapsedChange = (e) => {
    props.setProgress(e.target.value)
    refPlayer.current.seek(e.target.value)
    raf.cancel(handleLapsedText)
  }

  const handleVolumeChange = (e) => {
    setVolume(e.target.value)
  }

  const handleLike = () => {
    props.toggleLike({ variables: { id: playlist[positionPlaylist].id, like: !(playlist[positionPlaylist].like) } })
    setLike(!like)
  }

  return (
    <>
      <ReactHowler
        src={song.audio}
        format={['ogg']}
        playing={playing}
        volume={volume}
        mute={false}
        ref={refPlayer}
        onLoad={handleDurationText}
        onPlay={handleLapsedText}
      />
      <ContainerPlayer>
        <ImageTitleSong />
        <ContainerControls>
          <ControlsPlayer />
          <BarProgress
            lapsedText={lapsedText}
            durationText={durationText}
            handleLapsedChange={handleLapsedChange}
            handleLapsedText={handleLapsedText}
            {...props}
          />
        </ContainerControls>
        <ContainerControlVolumeAndLike>
          <ControlVolume
            volume={volume}
            onChange={handleVolumeChange}
            {...props}
          />
          <ButtonIcon
            like={like}
            onClick={handleLike}
          />
        </ContainerControlVolumeAndLike>
      </ContainerPlayer>
    </>
  )
}

export default Player
