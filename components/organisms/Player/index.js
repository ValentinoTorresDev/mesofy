import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import ReactHowler from 'react-howler'
import raf from 'raf'
import Next from '@icons/Next'
import Pause from '@icons/Pause'
import Play from '@icons/Play'
import Previous from '@icons/Previous'
import VolumeIcon from '@icons/Volume'
import { ContainerPlayer, ContainerSong, TextNameSong, ContainerControls, ButtonNextPrevious, ButtonPLayPause, StyledControls, ContainerProgress, TextTime, ContainerBarProgress, BarProgress, ContainerControlVolume, ContainerBarVolume, BarVolume } from './styles'

const Player = () => {
  const refPlayer = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [durationText, setDurationText] = useState('0:00')
  const [lapsedText, setLapsedText] = useState('0:00')
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.5)

  const secondsToString = (seconds) => {
    const stringDuration = (((seconds / 60).toFixed(2)).toString()).replace('.', ':')

    return stringDuration
  }

  const handleDurationText = () => {
    setDuration(refPlayer.current.duration())
    setDurationText(secondsToString(refPlayer.current.duration()))
  }

  const handleLapsedText = () => {
    setLapsedText(secondsToString(refPlayer.current.seek()))
    setProgress(refPlayer.current.seek())
    raf(handleLapsedText)
  }

  const handleLapsedChange = (e) => {
    setProgress(e.target.value)
    refPlayer.current.seek(e.target.value)
    raf.cancel(handleLapsedText)
  }

  const handleVolumeChange = (e) => {
    setVolume(e.target.value)
  }

  return (
    <>
      <ReactHowler
        src='https://media.graphcms.com/3hGIT6IhQOOtVX7Dmdzf'
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
          <Image
            src='/images/teLoAdverti.jpg'
            width={64}
            height={64}
            alt='songPlaying'
          />
          <TextNameSong>
            Te lo advertí
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
              duration={duration}
              progress={progress}
            >
              <BarProgress
                type='range'
                step={0.01}
                min={0}
                max={duration}
                value={progress}
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
