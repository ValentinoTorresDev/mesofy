import { ContainerSearch, StyledSearch } from './styles'
import IconSearch from '@icons/Search'
import useInputValue from '@hooks/useInputValue'

const Search = () => {
  const searchText = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()

    searchText.setValue('')
  }

  return (
    <ContainerSearch onSubmit={handleSubmit}>
      <StyledSearch
        placeholder='Buscar'
        value={searchText.value}
        onChange={searchText.onChange}
      />
      <IconSearch />
    </ContainerSearch>
  )
}

export default Search
