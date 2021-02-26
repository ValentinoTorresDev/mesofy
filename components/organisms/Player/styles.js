import styled from 'styled-components'

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
`

export const ContainerSong = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 4rem;
    height: 4rem;
    border-radius: 0.75rem;
    overflow: hidden;
  }
`

export const TextNameSong = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0 0 0 0.75rem;
`

export const ContainerControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonNextPrevious = styled.button`
  height: 1.5rem;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const ButtonPLayPause = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: rgba(19,93,239,.12);
  border: 2px solid ${({ theme }) => theme.blue};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  margin: 0 1rem;
`

export const ContainerProgress = styled.div`
  display: flex;
  align-items: center;
`

export const TextTime = styled.span`
  color: ${({ theme }) => theme.white};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.125rem;
`

export const ContainerBarProgress = styled.div`
  position: relative;
  width: 27rem;
  height: 0.125rem;
  margin: 0 1rem;

  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ duration, progress }) => `${progress * 100 / duration}%`};
    height: 0.125rem;
    background: ${({ theme }) => theme.blue};
    border-radius: 0.125rem;
  }
`

export const BarProgress = styled.input`
  position: absolute;
  width: 100%;
  height: 0.125rem;
  background-color: ${({ theme }) => theme.gray};
  border-radius: 0.125rem;
  appearance: none;
  outline: none;
  border: none;
  transition: .3s;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%; 
    background: ${({ theme }) => theme.blue};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%; 
    background: ${({ theme }) => theme.blue};
    cursor: pointer;
    border: none;
  }
`

export const ContainerControlVolume = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
`

export const ContainerBarVolume = styled.div`
  position: relative;
  width: 7.25rem;
  height: 0.125rem;
  margin: 0 0 0 1rem;

  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ volume }) => `${volume * 100 / 1}%`};
    height: 0.125rem;
    background: ${({ theme }) => theme.blue};
    border-radius: 0.125rem;
  }
`

export const BarVolume = styled.input`
  position: absolute;
  width: 100%;
  height: 0.125rem;
  background-color: ${({ theme }) => theme.gray};
  border-radius: 0.125rem;
  appearance: none;
  outline: none;
  border: none;
  transition: .3s;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%; 
    background: ${({ theme }) => theme.blue};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%; 
    background: ${({ theme }) => theme.blue};
    cursor: pointer;
    border: none;
  }
`
