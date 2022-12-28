import axios from "axios"
import { CHANGE_CATEGORY, CHANGE_CHART_OPTION, GET_CHARTS_DATA_ERROR, GET_CHARTS_DATA_PENDING, GET_CHARTS_DATA_SUCCESS, GET_COINS_DATA_ERROR, GET_COINS_DATA_PENDING, GET_COINS_DATA_SUCCESS, SET_ORDER_BY, SET_ORDER_DIR, SET_PAGE, SET_PER_PAGE, SET_TIME_INTERVAL, SORT_BY } from "."



export const changeCategory = (category) => {
    return {
        type: CHANGE_CATEGORY,
        payload: category
    }
}

export const changeChartOption = (value) => {
    return {
        type: CHANGE_CHART_OPTION,
        payload: value
    }
}

export const getCoinsData = (queryOrder) => {
    return async(dispatch, getState) => {
        const state = getState()
        const { currency } = state.config
        const { orderBy, orderDir, page, perPage } = state.allCoins.apiParams
        const { categoryId } = state.allCoins

        const category = categoryId !== 'cryptocurrency' ? `&category=${categoryId}` : ''
        

        try {
            dispatch({ type: GET_COINS_DATA_PENDING })
            let { data } = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}${category}&order=${orderBy}_${orderDir}&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d
            `)
            console.log(data)
            dispatch({
                type: GET_COINS_DATA_SUCCESS,
                payload: data
            })

            if ('sortBy' in queryOrder && 'sortByAsc' in queryOrder) {
                let { sortBy, sortByAsc } = queryOrder
          
                dispatch({
                  type: SORT_BY,
                  payload: { sortBy, sortByAsc },
                })
              }
              
        } catch (error) {
            dispatch({
                type: GET_COINS_DATA_ERROR,
                payload: error
            })
        }
    }
}

export const getChartsData = () => {
    return async(dispatch, getState) => {
        const state = getState()
        const { currency } = state.config
        const { timeInterval, chartOption } = state.allCoins

        try {
            dispatch({ type: GET_CHARTS_DATA_PENDING })
            let { data } = await axios(`https://api.coingecko.com/api/v3/coins/${chartOption}/market_chart?vs_currency=${currency}&days=${timeInterval}&interval=daily`)
            // console.log(data)

            let prices = data.prices
            let latestPrice = prices[prices.length - 1][1]
            let priceDataPoints = prices.map((price) => price[1])
            let volumes = data.total_volumes
            let latestVolume = volumes[volumes.length - 1][1]
            let volumeDataPoints = volumes.map((volume) => volume[1])

            if(prices.length === timeInterval + 1) {
                prices.pop()
                volumes.pop()
            }

            let dataLabels = prices.map((price) => {
                let date = new Date(price[0])
                let day = date.getDate().toString()
                let month = (date.getMonth() + 1).toString()

                if(day.length === 1) {
                    day = '0' + day
                }
                if(month.length === 1) {
                    month = '0' + month
                }

                return `${month}-${day}-${date.getFullYear()}`
            })

            dispatch({
                type: GET_CHARTS_DATA_SUCCESS,
                payload: {
                    dataLabels,
                    latestPrice,
                    latestVolume,
                    priceDataPoints,
                    volumeDataPoints
                }
            })

        } catch (error) {
            dispatch({ 
                type: GET_CHARTS_DATA_ERROR,
                payload: error
             })
        }
    }
}

export const setTimeInterval = (interval) => {
    return {
        type: SET_TIME_INTERVAL,
        payload: interval
    }
}

export const setOrderBy = () => {
    return {
        type: SET_ORDER_BY
    }
}

export const setOrderDir = () => {
    return {
        type: SET_ORDER_DIR
    }
}

export const setPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    }
}

export const setPerPage = (val) => {
    return {
        type: SET_PER_PAGE,
        payload: val
    }
}

export const sortBy = (sortBy, sortByAsc) => (dispatch) => {
    dispatch({
        type: SORT_BY,
        payload: { sortBy, sortByAsc}
    })
}