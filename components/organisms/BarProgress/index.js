import { ContainerProgress, TextTime, ContainerBarProgress, StyledBarProgress } from './styles'

const BarProgress = (props) => {
  return (
    <ContainerProgress>
      <TextTime>
        {props.lapsedText}
      </TextTime>
      <ContainerBarProgress
        duration={props.duration}
        progress={props.progress}
      >
        <StyledBarProgress
          type='range'
          step={0.01}
          min={0}
          max={props.duration}
          value={props.progress}
          onChange={props.handleLapsedChange}
          onMouseUp={props.handleLapsedText}
        />
      </ContainerBarProgress>
      <TextTime>
        {props.durationText}
      </TextTime>
    </ContainerProgress>
  )
}

export default BarProgress
