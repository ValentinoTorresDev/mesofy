import Logo from '@atoms/Logo'
import Search from '@molecules/Search'
import { ContainerHeader } from './styles'

const Header = () => {
  return (
    <ContainerHeader>
      <Logo />
      <Search />
    </ContainerHeader>
  )
}

export default Header
