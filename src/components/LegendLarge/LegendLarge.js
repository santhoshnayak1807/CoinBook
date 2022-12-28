import React from 'react'
import styled from 'styled-components'
import { screenSizeWidth } from 'utils'

const LegendLargeWrap = styled.div`
  font-size: 14px;
  @media (min-width:400px) {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  @media ${screenSizeWidth.desktopM} {
    font-size: 1.7rem;
    line-height: 2rem;
  }
`

const LegendLarge = (props) => {
  return (
    <LegendLargeWrap>{props.children}</LegendLargeWrap>
  )
}

export default LegendLarge