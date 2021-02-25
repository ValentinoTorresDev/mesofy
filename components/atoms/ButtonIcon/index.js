import Favourite from '@icons/Favourite'
import { ContainerIconButton, IconButton } from './styles'

const ButtonIcon = (props) => {
  return (
    <ContainerIconButton
      className={props.className}
      {...props}
    >
      <IconButton
        {...props}
      >
        {props.icon}
      </IconButton>
    </ContainerIconButton>
  )
}

ButtonIcon.defaultProps = {
  icon: <Favourite stroke='#FFFFFF' width={16} height={16} />
}

export default ButtonIcon
