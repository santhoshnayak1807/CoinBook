import {Chart} from 'components'
import {ChartLegend, LoadingBox} from 'components'
import React from 'react'
import { useSelector } from 'react-redux'
import { ChartContainer, ChartContent, ChartWrap } from './ChartsDisplay.css'

const displayChart = ( props, type, legendDisplayNumber ) => (
  type &&
  props.data?.length > 0 &&
  props.dataLabels?.length > 0 &&
  props.dataPoints?.length > 0 &&
  !props.isLoading &&
   legendDisplayNumber
)

const Charts = (props) => {

  console.log(props, "charts Display slider")

  const { latestPrice, latestVolume } = useSelector(state => state.allCoins)

  let type
  let legendDisplayNumber
  if(props.label === 'Price') {
    legendDisplayNumber = latestPrice
    type="current_price"
  }
  if(props.label === 'Volume') {
    legendDisplayNumber = latestVolume
    type="total_volume"
  }
  return (
    <ChartContainer width={props.width}>
      <ChartContent>
      {!displayChart(props, type, legendDisplayNumber) && <LoadingBox />}
        {displayChart(props, type, legendDisplayNumber) && 
           <>
           <ChartLegend
             legendDisplayNumber={legendDisplayNumber?.toFixed()}
             legendTitle={props.legendTitle}
           />
           <ChartWrap>
             <Chart
               dataLabels={props.dataLabels}
               dataPoints={props.dataPoints}
               label={props.label}
               type={props.type}
               displayXAxis={window.innerWidth > 400}
             />
           </ChartWrap>
         </>
        }
      
      </ChartContent>
    </ChartContainer>
  )
}

export default Charts