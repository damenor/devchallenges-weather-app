import styled from 'styled-components'

import { COLORS } from '../../styles/global'

const ButtonsTemp = styled.div`
  max-width: 960px;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  margin-bottom: 2rem;
`

const commonStyle = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 50%;
  cursor: pointer;
`

const ButtonsTempC = styled.div`
  ${commonStyle}
  margin-right: 0.5rem;
  color: ${props => props.isCentigrade ? COLORS.DARK : COLORS.GRAY};
  background-color: ${props => props.isCentigrade ? COLORS.GRAY : COLORS.BG_LIGHT};
  `

const ButtonsTempF = styled.div`
  ${commonStyle}
  color: ${props => !props.isCentigrade ? COLORS.DARK : COLORS.GRAY};
  background-color: ${props => !props.isCentigrade ? COLORS.GRAY : COLORS.BG_LIGHT};
`

const ButtonsTempComponent = ({ isCentigrade, setIsCentigrade }) => (
  <ButtonsTemp>
    <ButtonsTempC isCentigrade={isCentigrade} onClick={() => setIsCentigrade(true)}>ºC</ButtonsTempC>
    <ButtonsTempF isCentigrade={isCentigrade} onClick={() => setIsCentigrade(false)}>ºF</ButtonsTempF>
  </ButtonsTemp>
)

export default ButtonsTempComponent
