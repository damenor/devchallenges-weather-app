import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../styles/global'

const TodayImage = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    z-index: 2;
    width: 35%;
  }
`

const TodayImageBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('images/CloudBackground.png');
  background-position: center;
  background-size: cover;
  opacity: 0.3;
`

const TodayTemp = styled.p`
  margin: 0;
  color: ${COLORS.LIGHT};
  font-size: 8rem;
  text-align: center;
  span {
    font-size: 2rem;
  }
`

const TodayState = styled.p`
  color: ${COLORS.GRAY};
  font-size: 2rem;
  text-align: center;
`

const TodayLocation = styled.div`
  color: ${COLORS.GRAY};
  text-align: center;
  font-size: 0.9rem;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-bottom: 0.5rem;
  }
  img {
    width: 35px;
    height: 35px;
    margin-right: 0.5rem;
    padding: 5px;
    background-color: ${COLORS.BG};
    border-radius: 50%50%;
  }
`

const TodayComponent = () => {
  return (
    <>
      
      <TodayImage>
        <TodayImageBg></TodayImageBg>
        <img src="images/LightCloud.png" alt="imageweather"/>
      </TodayImage>

      <TodayTemp>
        15
        <span>ºC</span>
      </TodayTemp>
      
      <TodayState>Showers</TodayState>

      <TodayLocation>
        <p>Fri, 6 Jun</p>
        <p>
          <img src="images/location.png" alt="iconlocation"/>
          Helsinki
        </p>
      </TodayLocation>

    </>
  )
}

export default TodayComponent
