import styled from 'styled-components'

export const ContainerAlbum = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  min-height: 12.5rem;
  background-image: ${({ image }) => `url('/images/${image}')`};
  background-size: cover;
  background-position: center;
  border-radius: 0.75rem;
  outline: none;
  cursor: pointer;
  overflow: hidden;
`

export const NameAlbum = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.75rem;
  background: rgba(0,0,0,.6);
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: 500;
  backdrop-filter: blur(0.125rem);
  padding: 0 0.75rem;
`
