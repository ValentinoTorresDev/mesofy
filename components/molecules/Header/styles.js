import styled from 'styled-components'
import Breakpoints from '@styles/breakpoints'

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  grid-column-start: 1;
  grid-column-end: 3;

  @media (max-width: ${Breakpoints.desktop}){
    grid-column-start: 1;
    grid-column-end: 2;
  }
`
