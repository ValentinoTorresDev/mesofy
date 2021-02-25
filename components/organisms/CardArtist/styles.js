import styled from 'styled-components'

export const ContainerCardArtist = styled.article`
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
  padding: 1.25rem 0 0 0;
`

export const StyledCardArtist = styled.div`
  display: flex;
  border-radius: 0.75rem;
  overflow: hidden;

  & > div:nth-child(1){
    flex-shrink: 0;
  }
`

export const InfoBand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background: linear-gradient(135deg, #392C88 0%, #E58278 33%, #F5B31B 66%, #8CD83B 100%);
  padding: 1rem 2rem;
`

export const Listenners = styled.span`
  display: block;
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.1875rem;
`

export const TitleBand = styled.h3`
  color: ${({ theme }) => theme.white};
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0 0 0;
`

export const DescriptionBand = styled.p`
  max-width: 37.75rem;
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  margin: .5rem 0 0 0;
`

export const FooterCardArtist = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const ContainerPLayFavourite = styled.div`
  display: flex;
`

export const Followers = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: 400;
`
