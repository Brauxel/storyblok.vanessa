import React from 'react'
import { render } from 'react-dom'
import { Root } from './root'
import '@babel/polyfill'
import { configureStore } from './configureStore'

const store = configureStore()

render(<Root store={store} />, document.getElementById('root'))
