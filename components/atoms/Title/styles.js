import styled from 'styled-components'

export const StyledTitle = styled.h3`
  width: 100%;
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  margin: ${({ m = 0 }) => m};
  padding: ${({ p = 0 }) => p};
`
