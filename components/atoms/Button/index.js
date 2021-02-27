import { StyledButton, TextButton, ContainerIconButton, IconButton } from './styles'
import Play from '@icons/Play'
import Pause from '@icons/Pause'

const Button = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
    >
      <TextButton>
        {props.children}
      </TextButton>
      <ContainerIconButton>
        {props.playing
          ? <IconButton>
            <Pause
              stroke='#FFFFFF'
              width={16}
              height={16}
            />

          </IconButton>
          : <IconButton>
            {props.icon}
          </IconButton>}

      </ContainerIconButton>
    </StyledButton>
  )
}

Button.defaultProps = {
  children: 'Button',
  icon: <Play stroke='#FFFFFF' width={16} height={16} />
}

export default Button
