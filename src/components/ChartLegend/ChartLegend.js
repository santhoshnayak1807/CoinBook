import LegendLarge from 'components/LegendLarge'
import LegendNormal from 'components/LegendNormal'
import React from 'react'
import { useSelector } from 'react-redux'
import { formatChartNumber, monthNames, today } from 'utils'
import { LegendWrap } from './ChartLegend.css'
// import { LegendNormal, LegendLarge, LegendWrap } from './ChartLegend.css'

const ChartLegend = (props) => {
    const { currencySymbol } = useSelector(state => state.config)
  return (
    <LegendWrap>
        <LegendNormal>{props.legendTitle}</LegendNormal>
        <LegendLarge>{currencySymbol}{formatChartNumber(+props.legendDisplayNumber)}</LegendLarge>
        <LegendNormal>{monthNames[today.getMonth()]} {today.getDate()}, {today.getFullYear()}</LegendNormal>
    </LegendWrap>
  )
}

export default ChartLegend