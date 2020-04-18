import React from 'react'
import FilterLink from '../../containers/todos/FilterLink'
import { visibilityFilters } from '../../../actions/todos'

export const Footer: React.FC = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)
