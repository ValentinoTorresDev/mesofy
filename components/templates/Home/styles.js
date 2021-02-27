import styled from 'styled-components'
import Breakpoints from '@styles/breakpoints'

export const ContainerHome = styled.section`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 28.25rem;
  grid-template-rows: 2.5rem 17.25rem 4.375rem auto;
  column-gap: 2.5rem;
  background-color: ${({ theme }) => theme.purple};
  padding: 1rem 5rem 6rem 5rem;
  align-items: flex-start;

  @media (max-width: ${Breakpoints.desktop}){
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  @media (max-width: ${Breakpoints.tablet}){
    padding: 1rem 1.25rem 6rem 1.25rem;
  }
`

export const ContentTabs = styled.section`
  width: 100%;
`
