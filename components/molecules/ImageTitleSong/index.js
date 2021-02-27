import { useAppContext } from '@context/index'
import { ContainerSong, TextNameSong } from './styles'

const ImageTitleSong = (props) => {
  const { song } = useAppContext()
  return (
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
  )
}

export default ImageTitleSong
