import ButtonIcon from '@atoms/ButtonIcon'
import Play from '@icons/Play'
import Sounds from '@icons/Sounds'
import { ContainerSong, ContainerIconReproducing, NumberSong, TitleSong, TimeSong } from './styles'

const Song = (props) => {
  return (
    <ContainerSong
      reproducing={props.reproducing}
      onClick={props.onClick}
      {...props}
    >
      <NumberSong
        className='numberSong'
      >
        {props.number}
      </NumberSong>
      <ButtonIcon
        square
        className='playButton'
        w='2rem'
        h='2rem'
        icon={<Play stroke='#FFFFFF' width={14} height={14} />}
        bgIcon='blue'
        borderColorIcon='rgba(19,93,239,.36)'
      />
      <ContainerIconReproducing
        className='iconReproducing'
      >
        <Sounds stroke='#115DEF' />
      </ContainerIconReproducing>
      <TitleSong>
        {props.title}
      </TitleSong>
      <TimeSong>
        {props.duration}
      </TimeSong>
    </ContainerSong>
  )
}

Song.defaultProps = {
  number: 1,
  title: 'Title Song',
  duration: '03:00'
}

export default Song
