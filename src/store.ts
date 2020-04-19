import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/reducers'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger()

export const configureStore = (preloadedState?: any): any =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
