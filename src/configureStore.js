import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers/reducers'
import thunkMiddleware from 'redux-thunk'
import { monitorReducersEnchancer } from './enhancers/monitorReducer'
import { loggerMiddleware } from './middleware/logger'

const reduxLoggerMiddleware = createLogger()

export const configureStore = (preloadedState) => {
  const middlewares = [loggerMiddleware, thunkMiddleware, reduxLoggerMiddleware]
  const middleWareEnchancer = applyMiddleware(...middlewares)
  const enchancers = [middleWareEnchancer, monitorReducersEnchancer]
  const composedEnchancers = composeWithDevTools(...enchancers)

  const store = createStore(rootReducer, preloadedState, composedEnchancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store

  // createStore(
  //   rootReducer,
  //   preloadedState,
  //   applyMiddleware(thunkMiddleware, reduxLoggerMiddleware)
  // )
}
