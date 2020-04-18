import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { rootReducer } from './reducers/reducers'
import { Root } from './root'

const store = createStore(rootReducer)

render(<Root store={store} />, document.getElementById('root'))
