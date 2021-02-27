import styled from 'styled-components'
import Breakpoints from '@styles/breakpoints'

export const ContainerPlayer = styled.nav`
  position: fixed;
  bottom: 0; 
  left: 0;
  display: grid;
  grid-template-columns: 1fr 33rem 1fr;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  background-color: rgba(0,0,0,.8);
  backdrop-filter: blur(0.125rem);
  padding: 0.5rem 5rem;
  z-index: 1;

  @media (max-width: ${Breakpoints.desktop}){
    grid-template-columns: 1fr;
  }

  @media (max-width: ${Breakpoints.tablet}){
    padding: 0.5rem 1.25rem;
  }
`

export const ContainerControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContainerControlVolumeAndLike = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;

  & button {
    margin: 0 0 0 1rem;
  }

  @media (max-width: ${Breakpoints.desktop}){
    display: none;
  }
`
