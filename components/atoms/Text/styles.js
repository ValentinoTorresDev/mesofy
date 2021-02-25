import styled from 'styled-components'

export const StyledText = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin: ${({ m = 0 }) => m};
  padding: ${({ p = 0 }) => p};
`
