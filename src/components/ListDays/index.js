import React from 'react'
import styled from 'styled-components'

import { COLORS, STYLE_CARD_TITLE } from '../../styles/global'

const ListDays = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const ListDaysItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.75rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${COLORS.BG_LIGHT};
  border-radius: 0.25rem;
`

const ListDaysItemDate = styled.h3`
  ${STYLE_CARD_TITLE}
`

const ListDaysItemImage = styled.img`
  width: 50px;
  margin: 0.5rem 0;
`

const ListDaysItemTemp = styled.div`
  color: ${COLORS.GRAY};
  font-size: .8rem;
  text-align: center;
`

const ListDaysComponent = ({ days }) => (
  <ListDays>{ 
    
    days.map(({ date, image, temp }) => (
      <ListDaysItem key={`${date}`}>
        <ListDaysItemDate>{ date }</ListDaysItemDate>
        <ListDaysItemImage src={`images/${image}.png`} alt="weather"/>
        <ListDaysItemTemp>{`${temp.min}ºC - ${temp.min}ºC`}</ListDaysItemTemp>
      </ListDaysItem>
    ))

  }</ListDays>
)

export default ListDaysComponent
