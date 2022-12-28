import { createStore, combineReducers, applyMiddleware } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import allCoins from "./allCoins";
import config from "./config";
import coin from './coin'
import portfolio from "./portfolio";
import search from "./search";


const configKeeps = {
    key: 'config',
    storage: storage,
    whitelist: ['currency', 'currencySymbol', 'themeOn']
}

const allcoinsKeeps = {
    key: 'allCoins',
    storage: storage,
    whitelist: ['timeInterval', 'apiParams', 'categoryId', 'chartOption']
}

const portfolioKeeps = {
    key: 'portfolio',
    storage: storage,
    whitelist: ['myCoins']
}

const rootReducer = combineReducers({
    config: persistReducer(configKeeps, config),
    allCoins: persistReducer(allcoinsKeeps, allCoins),
    coin,
    portfolio: persistReducer(portfolioKeeps, portfolio),
    search
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)