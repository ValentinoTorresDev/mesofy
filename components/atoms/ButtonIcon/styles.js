import styled from 'styled-components'

export const ContainerIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  background-color: ${({ borderColorIcon = 'rgba(246,50,125,.36)' }) => borderColorIcon};
  border-radius: 50%;
  outline: none;
  margin: ${({ m = '0' }) => m};

  cursor: pointer;
  transition: .3s;

  &:active{
    transform: scale(.9);
  }
`

export const IconButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme, bgIcon = 'pink' }) => theme[bgIcon]};
  border-radius: 50%;
`
