import { StyledTitle } from './styles'

const Title = (props) => {
  return (
    <StyledTitle {...props}>
      {props.children}
    </StyledTitle>
  )
}

Title.defaultProps = {
  children: 'Title'
}

export default Title
