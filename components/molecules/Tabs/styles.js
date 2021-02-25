import styled, { css } from 'styled-components'

export const ContainerTabs = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1.25rem 0 0 0;
  grid-column-start: 1;
  grid-column-end: 3;
`

export const StyledTabs = styled.div`
  position: relative;
  width: auto;
  height: 1.875rem;

  &:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 5rem;
    height: 0.125rem;
    background-color: ${({ theme }) => theme.blue};
    border-radius: 0 0 0.125rem 0.125rem;
    transition: .3s;

    ${({ tab }) => tab === 'todo' && css`
      left: 0;
    `}

    ${({ tab }) => tab === 'popular' && css`
      left: 5rem;
    `}

    ${({ tab }) => tab === 'acercaDe' && css`
      left: 10rem;
    `}
  }
`

export const ButtonTab = styled.button`
  width: 5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  outline: none;
`
