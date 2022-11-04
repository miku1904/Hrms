import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from '../pages'

const reducer = {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
}

const reducermiddleware = [pokemonApi.middleware]

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        ...reducermiddleware,
        logger
    ]),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch