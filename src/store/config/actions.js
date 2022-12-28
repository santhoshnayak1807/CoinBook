import axios from "axios"
import { CHANGE_CURRENCY, GET_GLOBAL_DATA_ERROR, GET_GLOBAL_DATA_PENDING, GET_GLOBAL_DATA_SUCCESS, TOGGLE_MENU, TOGGLE_THEME } from "."



export const changeCurrency = (currency) => {
    return {
        type: CHANGE_CURRENCY,
        payload: currency
    }
}

export const getGlobalData = () => {
    return async(dispatch) => {
        try {
            dispatch({ type: GET_GLOBAL_DATA_PENDING })
            let { data } = await axios('https://api.coingecko.com/api/v3/global')
            data = data.data
            dispatch({
                type: GET_GLOBAL_DATA_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: GET_GLOBAL_DATA_ERROR,
                payload: error
            })
        }
    }
}

export const toggleMenu = () => {
    return {
        type: TOGGLE_MENU
    }
}

export const toggleTheme = () => {
    return {
        type: TOGGLE_THEME
    }
}