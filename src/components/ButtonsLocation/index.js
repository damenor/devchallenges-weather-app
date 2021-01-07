import styled from 'styled-components'

import { COLORS } from '../../styles/global'

const ButtonsLocation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`

const commonStyle = `
  display: flex;
  align-items: center;
  background-color: ${COLORS.GRAY};
  cursor: pointer;
`
  
const ButtonsLocationSearch = styled.p`
  ${commonStyle}
  margin: 0;
  padding: 0 1rem;
  color: ${COLORS.DARK};
  font-weight: bold;
`

const ButtonsLocationUser = styled.div`
  ${commonStyle}
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  img {
    width: 80%;
    opacity: 0.5;
  }
`

const ButtonsLocationComponent = ({ setIsSearchOpen }) => (
  <ButtonsLocation>
    <ButtonsLocationSearch onClick={() => setIsSearchOpen(true)}>Search for places</ButtonsLocationSearch>
    <ButtonsLocationUser>
      <img src="images/geolocation.svg" alt="geolocation"/>
    </ButtonsLocationUser>
  </ButtonsLocation>
)

export default ButtonsLocationComponent