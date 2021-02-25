import styled, { css } from 'styled-components'

export const ContainerIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ w = '2.25rem' }) => w};
  height: ${({ h = '2.25rem' }) => h};
  background-color: ${({ borderColorIcon = 'rgba(246,50,125,.36)' }) => borderColorIcon};
  border-radius: 50%;
  outline: none;
  margin: ${({ m = '0' }) => m};
  padding: 0.125rem;

  cursor: pointer;
  transition: .3s;

  &:active{
    transform: scale(.9);
  }

  
  ${({ square }) => square && css`
    border-radius: 0.5rem;
  `}
`

export const IconButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, bgIcon = 'pink' }) => theme[bgIcon]};
  border-radius: 50%;

  ${({ square }) => square && css`
    border-radius: 0.5rem;
  `}
`
