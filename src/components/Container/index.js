import styled from 'styled-components'

import { COLORS, mediaQueries } from '../../styles/global'

export const ContainerApp = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 400px auto;
  ${mediaQueries('lg')`
    grid-template-columns: 360px auto;
    `}
  ${mediaQueries('sm')`
    grid-template-columns: auto;
    grid-template-rows: 100vh auto;
  `}
`

export const ContainerAppLeft = styled.div`
  position: relative;
  height: 100%;
  background-color: ${COLORS.BG_LIGHT};
`

export const ContainerAppRight = styled.div`
  height: 100%;
  padding: 4rem 8rem;
  background-color: ${COLORS.BG};
  ${mediaQueries('lg')`
     padding: 2rem 4rem;
     `}
  ${mediaQueries('sm')`
    padding: 2rem;
  `}
`