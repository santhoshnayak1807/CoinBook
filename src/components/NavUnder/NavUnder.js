import LoadingBox from 'components/LoadingBox'
import React, { useEffect } from 'react'
import Media from 'react-media'
import { useDispatch, useSelector } from 'react-redux'
import { getGlobalData } from 'store/config/actions'
import { prettierNumber, screenSizeWidth } from 'utils'
import { 
  Circle, 
  NavBulletPoint, 
  NavUnderContainer, 
  NavUnderImg, 
  NavUnderLi, 
  NavUnderUl, 
  NavUnderWrap, 
  PercentDisplay 
} from './NavUnder.css'

const NavUnder = () => {
  const { 
    currency, 
    currencySymbol, 
    data, 
    isLoading, 
    error 
  } = useSelector(state => state.config)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGlobalData())
  }, [currency])

  return (
    <Media
      queries={{
        mobileL: screenSizeWidth.mobileL,
        desktopS: screenSizeWidth.desktopS,
        desktopSM: screenSizeWidth.desktopSM,
        desktopM: screenSizeWidth.desktopM,
        desktopML: screenSizeWidth.desktopML,
        desktopL: screenSizeWidth.desktopL,
      }}
    >
      {(matches) => (
        <NavUnderContainer>
        <NavUnderWrap>
          {error && <div>API Error. Refresh Page.</div>}
          {isLoading && <LoadingBox bar height={20} />}
          {!isLoading && data && (
            <NavUnderUl>
              {matches.desktopML && (
                  <NavUnderLi>Coins {data.active_cryptocurrencies}</NavUnderLi>
              )}
              {matches.desktopL && (
                <NavUnderLi>Exchange {data.markets}</NavUnderLi>
              )}
              {matches.desktopSM && (
                <NavUnderLi>
                <NavBulletPoint>&#8226;</NavBulletPoint>
                {currencySymbol}
                {prettierNumber(
                  Math.round(data.total_market_cap[currency])
                )}
              </NavUnderLi>
              )}
              <NavUnderLi>
                <NavBulletPoint>&#8226;</NavBulletPoint>
                {currencySymbol}
                {prettierNumber(
                  Math.round(data.total_volume[currency])
                )}
                <PercentDisplay
                  percent={Math.round(
                    data.total_volume[currency] / data.total_market_cap[currency]
                  )}
                >
                  <Circle 
                    percent={Math.round(
                      data.total_volume[currency] / data.total_market_cap[currency]
                    )}
                  />
                </PercentDisplay>
              </NavUnderLi>
              <NavUnderLi>
                <NavUnderImg marginRight='1'>
                    <img
                      src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
                      alt="btc thumb"
                    />
                </NavUnderImg>
                {Math.round(data.market_cap_percentage.btc)}%
                <PercentDisplay
                  percent={Math.round(data.market_cap_percentage.btc)}
                >
                  <Circle 
                    percent={Math.round(data.market_cap_percentage.btc)}
                  />
                </PercentDisplay>
              </NavUnderLi>
              {matches.mobileL && (
                <NavUnderLi>
                <NavUnderImg marginRight="-4">
                  <img
                    src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880"
                    alt="eth thumb"
                  />
                </NavUnderImg>
                {Math.round(data.market_cap_percentage.eth)}%
                <PercentDisplay
                  percent={Math.round(data.market_cap_percentage.eth)}
                >
                  <Circle
                    percent={Math.round(data.market_cap_percentage.eth)}
                  />
                </PercentDisplay>
              </NavUnderLi>
              )}
            </NavUnderUl>
          )}
        </NavUnderWrap>
    </NavUnderContainer>
      )}
    </Media>
  )
}

export default NavUnder