import styled from 'styled-components'
import Breakpoints from '@styles/breakpoints'

export const ContainerListAlbums = styled.section`
  width: 100%;
  height: 100%;
`
export const StyledListAlbums = styled.ul`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 28.5rem);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 12.5rem;
  gap: 2.5rem;
  overflow-y: auto;
  padding: 0 0.75rem 0 0;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.blue};
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0,0,0, .32);
    border-radius: 0.25rem;
  }

  @media (max-width: ${Breakpoints.tablet}){
    grid-template-columns: 1fr;
  }
`

export const ListItemItemAlbum = styled.li`
  list-style: none;
`
