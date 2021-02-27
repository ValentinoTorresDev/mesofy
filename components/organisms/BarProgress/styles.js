import styled from 'styled-components'

export const ContainerProgress = styled.div`
  display: flex;
  justify-content: center;
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
  width: 100%;
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

export const StyledBarProgress = styled.input`
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
