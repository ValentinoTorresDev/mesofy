import styled from 'styled-components'

export const ContainerAbout = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 26.125rem);
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
