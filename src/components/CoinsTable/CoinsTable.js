import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  changeCategory, 
  setOrderBy, 
  setOrderDir, 
  setPage, 
  setPerPage 
} from 'store/allCoins/actions'
import { 
  ApiSettings, 
  ApiSettingsLeft, 
  ApiSettingsRight, 
  CategoryContainer, 
  CategoryItem, 
  DownArrow, 
  FilterDown, 
  FilterUp, 
  LeftArrow, 
  Order, 
  RightArrow, 
  ScrollWrapper, 
  SelectArrow, 
  ShowInput, 
  TableBody, 
  TableContent, 
  TableHeaderRow, 
  TableWrapper, 
  TopBottom, 
  Wrapper 
} from './CoinsTable.css'

import { categories, coinBreakPoints, keyGen, rows } from 'utils'
import Media from 'react-media'


const CoinsTable = React.memo((props) => {
  const { data } = props
  const { config, categoryId } = useSelector(state => state.allCoins)
  const { page, perPage, orderBy, orderDir } = useSelector(state => state.allCoins.apiParams)
  const dispatch = useDispatch()

  let row = rows(data)


  return (
    <Media
      queries={{
        chart: coinBreakPoints.chart,
        volume: coinBreakPoints.volume,
        supply: coinBreakPoints.supply,
        days7: coinBreakPoints.days7,
        hour24: coinBreakPoints.hour24,
        hour1: coinBreakPoints.hour1,
        number: coinBreakPoints.number,
        price: coinBreakPoints.price
      }}
    >
      {(matches) => (
        <>
          <ApiSettings>
        <ApiSettingsLeft>
          <SelectArrow onClick={() => dispatch(setOrderDir())} />
          <TopBottom>
            {orderDir === 'desc' ? 'TOP' : 'BOT'} {page * perPage}
          </TopBottom>
          <Order>
            BY {orderBy.toUpperCase().split('_').join(' ')} <DownArrow onClick={() => dispatch(setOrderBy())} />
          </Order>
        </ApiSettingsLeft>

        <CategoryContainer>
          {Object.keys(categories).map((category) => {
            return (
              <CategoryItem
                key={keyGen()}
                onClick={() => dispatch(changeCategory(category))}
                selected={categoryId === category}
              >
                {categories[category].name}
              </CategoryItem>
            )
          })}
        </CategoryContainer>

        <ApiSettingsRight>
            SHOW:
            <ShowInput 
              value={perPage}
              onChange={(e) => dispatch(setPerPage(e.target.value)) }
            >
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </ShowInput>
            PAGE
            <LeftArrow onClick={() => dispatch(setPage(-1))} />
               {page}
            <RightArrow onClick={() => dispatch(setPage(1))} />
        </ApiSettingsRight>
    </ApiSettings>

          <ScrollWrapper>
          <TableWrapper>
            <TableHeaderRow>
              {Object.keys(config).map((label, idx) => {
                return (
                  <th key={keyGen()}>
                    {config[label].key}
                    {config[label].sortBy ? (config[label].sortBy ? <FilterUp  /> : <FilterDown />) : ''}
                  </th>
                )
              })}
            </TableHeaderRow>
              {row.map(row => {
                return (
                  <Wrapper key={keyGen()}>
                    <tr>
                    <TableContent>{row.number}</TableContent>
                    <TableContent>{row.name}</TableContent>
                    <TableContent>{row.price}</TableContent>
                    <TableContent>{row.hour}</TableContent>
                    <TableContent>{row.hour24}</TableContent>
                    <TableContent>{row.days7}</TableContent>
                    <TableContent>{row.volumeMarketCap}</TableContent>
                    <TableContent>{row.circulatingTotalSupply}</TableContent>
                    <TableContent>{row.last7d}</TableContent>
                  </tr>
                  </Wrapper>
                )
              })}
          </TableWrapper>
          </ScrollWrapper>
        </>
      )}
    </Media>
  )
})

export default CoinsTable