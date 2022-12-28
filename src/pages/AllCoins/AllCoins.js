import { 
  ChartsDisplay, 
  ChartSlider, 
  CoinsTable, 
  LoadingBox 
} from 'components'
import React, { useEffect } from 'react'
import Media from 'react-media'
import { useDispatch, useSelector } from 'react-redux'
import { changeChartOption, getChartsData, getCoinsData, setTimeInterval } from 'store/allCoins/actions'
import { chartOptions, keyGen, screenSizeWidth, timeIntervals } from 'utils'
import { 
  ChartsWrapper, 
  CoinsContainer, 
  Container, 
  Content, 
  DataSelectContainer, 
  DataSelectItem, 
  H1, 
  OveriewContainer, 
  Select, 
  SelectContainer, 
  StyledArrow 
} from './AllCoins.css'

const AllCoins = () => {

  const { 
    categoryId, 
    chartOption, 
    coinsData, 
    isCoinsLoading, 
    dataLabels, 
    priceDataPoints, 
    volumeDataPoints, 
    isChartsLoading, 
    timeInterval, 
    apiParams 
  } = useSelector(state => state.allCoins)
  const { currency } = useSelector(state => state.config)
 

  const handleOnChange = (e) => {
    dispatch(changeChartOption(e.target.value))
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCoinsData())
  },[currency, apiParams, categoryId])

  useEffect(() => {
    dispatch(getChartsData())
  }, [currency, timeInterval, chartOption])
  
  return (
     <Container>
      <Content>
        <OveriewContainer>
        <H1>{chartOptions[chartOption].name} Overview</H1>
        <SelectContainer>
          <Select
            value={chartOption}
            onChange={(e) => handleOnChange(e)}
          >
            {Object.keys(chartOptions).map((name) => {
              return (
                <option key={keyGen()} value={name} >{chartOptions[name].name}</option>
              )
            })}
          </Select>
          <StyledArrow size="0.6rem" />
        </SelectContainer>
        </OveriewContainer>
        <Media
          queries={{
            desktopS: screenSizeWidth.desktopS,
            mobile: screenSizeWidth.mobile
          }}
        >
          {(matches) => (
            <>
            {matches.desktopS && (
            <ChartsWrapper>
              <ChartsDisplay
                data={coinsData}
                dataLabels={dataLabels}
                dataPoints={priceDataPoints}
                isLoading={isChartsLoading || isCoinsLoading}
                label="Price"
                legendTitle="Price"
                type="Line"
              />
              <ChartsDisplay
                data={coinsData}
                dataLabels={dataLabels}
                dataPoints={volumeDataPoints}
                isLoading={isChartsLoading || isCoinsLoading}
                label="Volume"
                legendTitle="Volume 24h"
                type="Bar"
              />
            </ChartsWrapper>
            )}
            {matches.mobile && (
              <ChartSlider
                data={coinsData}
                dataLabels={dataLabels}
                priceDataPoints={priceDataPoints}
                volumeDataPoints={volumeDataPoints}
                isLoading={isChartsLoading || isCoinsLoading}
              />
            )}
            </>
          )}
        </Media>

        <DataSelectContainer>
          {Object.keys(timeIntervals).map((interval) => {
            return (
              <DataSelectItem
                onClick={
                  () => dispatch(setTimeInterval(timeIntervals[interval]))
                }
                highlight={timeInterval === timeIntervals[interval]}
                key={keyGen()}
              >
                {interval}
              </DataSelectItem>
            )
          })}
        </DataSelectContainer>

        <CoinsContainer>
          {(isCoinsLoading || isChartsLoading || coinsData.length < 1) && <LoadingBox height={250} />}
          {coinsData.length > 1 && !isChartsLoading && !isCoinsLoading &&
            (
              <CoinsTable 
            data={coinsData} 
            isLoading={isChartsLoading || isCoinsLoading}
          />
            )
          }
        </CoinsContainer>
      </Content>
     </Container>
  )
}

export default AllCoins