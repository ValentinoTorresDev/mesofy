import { ContainerSearch, StyledSearch } from './styles'
import IconSearch from '@icons/Search'
import useInputValue from '@hooks/useInputValue'

const Search = () => {
  const searchText = useInputValue('')

  const handleSearch = (e) => {
    e.preventDefault()

    searchText.setValue('')
  }

  return (
    <ContainerSearch onSubmit={handleSearch}>
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
