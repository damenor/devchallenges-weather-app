import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../styles/global'

const SearchCity = styled.div`
  z-index: 3;
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5rem 2rem;
  transform: ${props => props.isSearchOpen ? `translateX(0)`: `translateX(-100%)` };
  opacity: ${props => props.isSearchOpen ? 1 : 0 };
  background-color: ${COLORS.BG_LIGHT};
  transition: all .4s;
`

const SearchCityClose = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 2rem;
  padding: 4px;
  background-color: ${COLORS.GRAY};
  border-radius: 50%;
  cursor: pointer;
`

const SearchCityInputGroup = styled.div`
  display: flex; 
  input {
    flex: 1;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${COLORS.GRAY};
  }
  button {
    padding: 1rem;
    margin-left: 0.5rem;
    color: ${COLORS.BG_LIGHT};
    text-transform: uppercase;
    font-weight: bold;
    background-color: ${COLORS.SUCCESS};
    border: none;
  }
`

const SearchCityComponent = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <SearchCity isSearchOpen={isSearchOpen}>
      <SearchCityClose src="images/close.png" onClick={() => setIsSearchOpen(false)}></SearchCityClose>
      <SearchCityInputGroup>
        <input type="text" placeholder="Search location"/>
        <button>Search</button>
      </SearchCityInputGroup>
    </SearchCity>
  )
}

export default SearchCityComponent
