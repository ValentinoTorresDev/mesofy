import styled from 'styled-components'

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
