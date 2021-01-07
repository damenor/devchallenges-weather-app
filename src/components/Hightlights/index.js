import React from 'react'
import styled from 'styled-components'

import { COLORS, STYLE_CARD_TITLE, mediaQueries } from '../../styles/global'

const HightlightsComponentStyle = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const HightlightsTitle= styled.h2`
  color: ${COLORS.LIGHT};
  margin: 0;
  margin: 2rem 0;
`

const HightlightsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2rem;
  row-gap: 2rem;
  ${mediaQueries('lg')`
    grid-template-columns: auto;
  `}
` 

const HightlightsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${COLORS.BG_LIGHT};
  border-radius: 0.25rem;
`

const HightlightsCardTitle= styled.h3`
  ${STYLE_CARD_TITLE}
`

const HightlightsCardText = styled.p`
  margin: 1rem 0;
  color: ${COLORS.LIGHT};
  font-size: 3rem;
`

const HightlightsCardCompass = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
    padding: 3px;
    background-color: ${COLORS.GRAY};
    border-radius: 50%;
  }
  span {
    margin-left: 0.25rem;
    color: ${COLORS.GRAY};
  }
`

const HightlightsCardProgress = styled.div`
  position: relative;
  width: 100%;
  height: 1rem;
  background-color: ${COLORS.GRAY};
  border-radius: 1rem;
  overflow: hidden;
  &:after {
    z-index: 1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: ${COLORS.SUCCESS};
  }
`

const HightlightsComponent = () => {
  return (
    <HightlightsComponentStyle>
      <HightlightsTitle>Today's Hightlights</HightlightsTitle>

      <HightlightsContainer>

        <HightlightsCard>
          <HightlightsCardTitle>Wind status</HightlightsCardTitle>
          <HightlightsCardText>7 mph</HightlightsCardText>
          <HightlightsCardCompass>
            <img src="images/compass.png" alt="compass"/>
            <span>WSW</span>
          </HightlightsCardCompass>
        </HightlightsCard>

        <HightlightsCard>
          <HightlightsCardTitle>Humidity</HightlightsCardTitle>
          <HightlightsCardText>84%</HightlightsCardText>
          <HightlightsCardProgress percentage={84}></HightlightsCardProgress>
        </HightlightsCard>

        <HightlightsCard>
          <HightlightsCardTitle>Visibility</HightlightsCardTitle>
          <HightlightsCardText>6,4 miles</HightlightsCardText>
        </HightlightsCard>

        <HightlightsCard>
          <HightlightsCardTitle>Air pressure</HightlightsCardTitle>
          <HightlightsCardText>998 mb</HightlightsCardText>
        </HightlightsCard>

      </HightlightsContainer>

    </HightlightsComponentStyle>
  )
}

export default HightlightsComponent
