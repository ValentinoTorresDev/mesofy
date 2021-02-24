import styled from 'styled-components'

export const ContainerSearch = styled.form`
  position: relative;

  & > svg{
    stroke: rgba(255,255,255,.6);
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translate(0, -50%);
    transition: .3s;
  }
`

export const StyledSearch = styled.input`
  width: 16rem;
  height: 2.5rem;
  background-color: rgba(18,23,44,.8);
  color: ${({ theme }) => theme.white};
  border-radius: .75rem;
  padding: 1rem 1rem 1rem 3rem;
  outline: none;
  font-size: 0.875rem;
  font-weight: 400;

  &:placeholder{
    color: rgba(255,255,255,.6);
  }

  &:focus ~ svg{
    stroke: ${({ theme }) => theme.white};
  }
`
