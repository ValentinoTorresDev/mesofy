import styled, { css } from 'styled-components'

export const ContainerSong = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  width: 100%;
  height: 2.75rem;
  background-color: rgba(18,23,44,.8);
  border-radius: 0.75rem;
  cursor: pointer;
  transition: .3s;
  overflow: hidden;
  outline: none;

  & .playButton{
    display: none;
  }

  &:hover{
    background: rgba(0,0,0,.32);

    h6{
      color: ${({ theme }) => theme.blue};
    }

    .numberSong{
      display: none;
    }

    .playButton{
      display: flex;
    }
  }

  ${({ reproducing }) => reproducing && css`
    background: rgba(0,0,0,.32);

    .numberSong{
      display: none;
    }
    &:hover{
      .playButton{
        display: none;
      }
    }

    & .iconReproducing{
      display: flex;
    }

    &:hover{
      h6{
        color: ${({ theme }) => theme.white};
      }
    }

    &:before{
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      width: calc(100% - 12px);
      height: 0.125rem;
      background-color: rgba(0,0,0, .32);
      z-index: 1;
    }

    &:after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0.375rem;
      width: calc(60% - 12px);
      height: 0.125rem;
      background-color: ${({ theme }) => theme.blue};
      transition: .3s;
      z-index: 1;
    }
  `}
`

export const ContainerIconReproducing = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
`

export const NumberSong = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.white};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.125rem;
`

export const TitleSong = styled.h6`
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: capitalize;
  transition: .3s;
`

export const TimeSong = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.125rem;
`
