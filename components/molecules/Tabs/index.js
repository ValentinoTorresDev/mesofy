import { useAppContext } from '@context/index'
import { ContainerTabs, StyledTabs, ButtonTab } from './styles'

const Tabs = () => {
  const { tab, setTab } = useAppContext()

  return (
    <ContainerTabs>
      <StyledTabs tab={tab}>
        <ButtonTab onClick={() => setTab('todo')}>
          Todo
        </ButtonTab>
        <ButtonTab onClick={() => setTab('popular')}>
          Popular
        </ButtonTab>
        <ButtonTab onClick={() => setTab('acercaDe')}>
          Acerca de
        </ButtonTab>
      </StyledTabs>
    </ContainerTabs>
  )
}

export default Tabs
