import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import ReactHowler from 'react-howler'
import raf from 'raf'
import Next from '@icons/Next'
import Pause from '@icons/Pause'
import Play from '@icons/Play'
import Previous from '@icons/Previous'
import VolumeIcon from '@icons/Volume'
import { useAppContext } from '@context/index'
import { ContainerPlayer, ContainerSong, TextNameSong, ContainerControls, ButtonNextPrevious, ButtonPLayPause, StyledControls, ContainerProgress, TextTime, ContainerBarProgress, BarProgress, ContainerControlVolume, ContainerBarVolume, BarVolume } from './styles'
import secondsToMinutes from '@utils/secondsToMinutes'

const Player = (props) => {
  const { song } = useAppContext()
  const refPlayer = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [durationText, setDurationText] = useState('0:00')
  const [lapsedText, setLapsedText] = useState('0:00')
  const [volume, setVolume] = useState(0.5)

  useEffect(() => {
    return () => raf.cancel(handleLapsedText)
  }, [])

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
        <ContainerSong>
          <img
            src={song.image}
            width={64}
            height={64}
            alt='songPlaying'
          />
          <TextNameSong>
            {song.title}
          </TextNameSong>
        </ContainerSong>
        <ContainerControls>
          <StyledControls>
            <ButtonNextPrevious>
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
            <ButtonNextPrevious>
              <Next
                stroke='#115DEF'
              />
            </ButtonNextPrevious>
          </StyledControls>
          <ContainerProgress>
            <TextTime>
              {lapsedText}
            </TextTime>
            <ContainerBarProgress
              duration={props.duration}
              progress={props.progress}
            >
              <BarProgress
                type='range'
                step={0.01}
                min={0}
                max={props.duration}
                value={props.progress}
                onChange={handleLapsedChange}
                onMouseUp={handleLapsedText}
              />
            </ContainerBarProgress>
            <TextTime>
              {durationText}
            </TextTime>
          </ContainerProgress>
        </ContainerControls>
        <ContainerControlVolume>
          <VolumeIcon
            stroke='#115DEF'
          />
          <ContainerBarVolume
            volume={volume}
          >
            <BarVolume
              type='range'
              step={0.01}
              min={0}
              max={1}
              value={volume}
              onChange={handleVolumeChange}
            />
          </ContainerBarVolume>
        </ContainerControlVolume>
      </ContainerPlayer>
    </>
  )
}

export default Player
