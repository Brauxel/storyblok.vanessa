import { visibilityFilters } from '../actions/todos'

export const visibilityFilter = (
  state: any = visibilityFilters.SHOW_ALL,
  action: any
): any => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
