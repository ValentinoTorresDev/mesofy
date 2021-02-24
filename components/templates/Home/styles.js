import styled from 'styled-components'

export const ContainerHome = styled.section`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 27.5rem;
  gap: 0 2.5rem;
  background-color: ${({ theme }) => theme.purple};
  padding: 1rem 5rem 0 5rem;
  align-items: flex-start;
`
