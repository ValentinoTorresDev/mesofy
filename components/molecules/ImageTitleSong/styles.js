import styled from 'styled-components'
import Breakpoints from '@styles/breakpoints'

export const ContainerSong = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 4rem;
    height: 4rem;
    border-radius: 0.75rem;
    overflow: hidden;
  }

  @media (max-width: ${Breakpoints.desktop}){
    display: none;
  }
`

export const TextNameSong = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0 0 0 0.75rem;
`
