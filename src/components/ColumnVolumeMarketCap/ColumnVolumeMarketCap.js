import React from 'react'
import { formatCurrency } from '@coingecko/cryptoformat'
import { useSelector } from 'react-redux'
import { numberShortener } from 'utils'
import {ColumnPercentBar} from 'components'

const ColumnVolumeMarketCap = (props) => {
  const { currency } = useSelector(state => state.config)
  const totalVolume = props.totalVolume
            ? numberShortener(formatCurrency(props.totalVolume, currency, 'en'))
            : 'Omitted'

  const marketCap = props.marketCap ? numberShortener(formatCurrency(props.marketCap, currency, 'en')) : 'Omitted'
  const percent = props.totalVolume && props.marketCap 
                 ? (100 * props.totalVolume)  / props.marketCap : 100
  return (
    <ColumnPercentBar
      color1={props.color1}
      color2={props.color2}
      first={totalVolume}
      second={marketCap}
      percent={percent}
    />
  )
}

export default ColumnVolumeMarketCap