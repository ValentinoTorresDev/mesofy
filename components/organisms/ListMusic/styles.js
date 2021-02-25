import styled from 'styled-components'

export const ListMusic = styled.ul`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 28.5rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
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
`
export const ListItemItemMusic = styled.li`
  list-style: none;
`
