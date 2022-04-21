let nextToDoId = 0

interface toDoTypes {
  id: number
  type: string
}

interface addToDoTypes extends toDoTypes {
  text: string
}

interface setVisibilityFiterTypes {
  type: string
  filter: string
}

export const addToDo = (text: string): addToDoTypes => ({
  type: 'ADD_TODO',
  id: nextToDoId++,
  text
})

export const toggleToDo = (id: number): toDoTypes => ({
  type: 'TOGGLE_TODO',
  id
})

export const setVisibilityFiter = (
  filter: string
): setVisibilityFiterTypes => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
