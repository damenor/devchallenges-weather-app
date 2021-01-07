import React, { useEffect, useState } from 'react'

import ButtonsLocationComponent from './components/ButtonsLocation'
import ButtonsTempComponent from './components/ButtonsTemp'
import { ContainerApp, ContainerAppLeft, ContainerAppRight } from './components/Container'
import HightlightsComponent from './components/Hightlights'
import ListDaysComponent from './components/ListDays'
import SearchCityComponent from './components/SearchCity'
import TodayComponent from './components/Today'

const App = () => {

  const [userCoords, setUserCoords] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCentigrade, setIsCentigrade] = useState(true)
  const [woeid, setWoeid] = useState(null)

  // useEffect(() => {
  //   if('geolocation' in navigator) {
  //     navigator.permissions.query({ name: 'geolocation' }).then(({ state }) => {
  //       if (state === 'granted') navigator.geolocation.getCurrentPosition(({ coords }) => {
  //         setUserCoords({ lat: coords.latitude, lng: coords.longitude })
  //       })
  //     })
  //   } else {
  //     console.log("Not Available")
  //   }
  // }, [])

  // useEffect(() => {
  //   if(userCoords) {
  //     (async() => {
  //       const urlCoors = 'https://cors-anywhere.herokuapp.com/'
  //       const url = `${urlCoors}https://www.metaweather.com/api/location/search/?lattlong=${userCoords.lat},${userCoords.lng}`
  //       const response = await (await fetch(url)).json()
  //     })()
  //   }
  // }, [userCoords])

  const days = [
    { date: 'Tomorrow', image: 'Clear', temp: { min: 11, max: 16 } },
    { date: 'Sun, 7 Jun', image: 'HeavyCloud', temp: { min: 11, max: 33 } },
    { date: 'Sun, 8 Jun', image: 'HeavyRain', temp: { min: 5, max: 25 } },
    { date: 'Sun, 9 Jun', image: 'LightCloud', temp: { min: 3, max: 12 } },
    { date: 'Sun, 10 Jun', image: 'Showers', temp: { min: 1, max: 19 } },
  ]

  return (
    <ContainerApp>
  
      <ContainerAppLeft>
        <ButtonsLocationComponent setIsSearchOpen={setIsSearchOpen}></ButtonsLocationComponent>
        <TodayComponent></TodayComponent>
        <SearchCityComponent isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}></SearchCityComponent>
      </ContainerAppLeft>
  
      <ContainerAppRight>

        <ButtonsTempComponent isCentigrade={isCentigrade} setIsCentigrade={setIsCentigrade}></ButtonsTempComponent>
        <ListDaysComponent days={days}></ListDaysComponent>
        <HightlightsComponent></HightlightsComponent>
  
      </ContainerAppRight>
  
    </ContainerApp>
  )
}

export default App
