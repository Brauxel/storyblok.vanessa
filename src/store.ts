import { createStore } from 'redux'
import { changeHeading } from './reducers/reducers'

export const store = createStore(changeHeading)

// Log the initial state
console.log(store.getState())
