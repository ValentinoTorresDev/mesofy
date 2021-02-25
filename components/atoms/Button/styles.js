import styled from 'styled-components'

export const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: auto;
  height: 2.25rem;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: .3s;

  &:active{
    transform: scale(.9);
  }
`

export const TextButton = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2rem;
  background-color: ${({ bg = 'rgba(17,93,239,.12)' }) => bg};
  color: ${({ theme, color = 'white' }) => theme[color]};
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  padding: 0 3.5rem 0 2.5rem;
  border-radius: 1rem;
`

export const ContainerIconButton = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  background-color: ${({ borderColorIcon = 'rgba(17,93,239,.36)' }) => borderColorIcon};
  border-radius: 50%;
`

export const IconButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme, bgIcon = 'blue' }) => theme[bgIcon]};
  border-radius: 50%;
`
