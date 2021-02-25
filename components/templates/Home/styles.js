import styled from 'styled-components'

export const ContainerHome = styled.section`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 28.25rem;
  grid-template-rows: 2.5rem 17.25rem 4.375rem auto;
  column-gap: 2.5rem;
  background-color: ${({ theme }) => theme.purple};
  padding: 1rem 5rem;
  align-items: flex-start;
`

export const ContentTabs = styled.section`
  width: 100%;
`
