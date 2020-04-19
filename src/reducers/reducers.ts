import { combineReducers } from 'redux'
import { todos } from './todos'
import { visibilityFilter } from './visibilityFilter'
import { selectedSubreddit } from './selectedSubreddit'
import { postsBySubreddit } from './postsBySubreddit'

export const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  selectedSubreddit,
  postsBySubreddit
})
