import styled from 'styled-components'

export const ContainerHome = styled.section`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 27.5rem;
  grid-template-rows: 2.5rem 18rem 3.125rem auto;
  column-gap: 2.5rem;
  background-color: ${({ theme }) => theme.purple};
  padding: 1rem 5rem 0 5rem;
  align-items: flex-start;
`
