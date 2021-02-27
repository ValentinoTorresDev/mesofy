import VolumeIcon from '@icons/Volume'
import { ContainerBarVolume, BarVolume } from './styles'

const ControlVolume = (props) => {
  return (
    <>
      <VolumeIcon
        stroke='#115DEF'
      />
      <ContainerBarVolume
        {...props}
      >
        <BarVolume
          type='range'
          step={0.01}
          min={0}
          max={1}
          value={props.volume}
          onChange={props.onChange}
        />
      </ContainerBarVolume>
    </>
  )
}

export default ControlVolume
