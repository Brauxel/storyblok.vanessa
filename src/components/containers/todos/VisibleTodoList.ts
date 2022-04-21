/* eslint-disable */
import { connect } from 'react-redux'
import { toggleToDo } from '../../../actions/todos'
import { ToDoList } from '../../shared/toDoList/TodoList'
import { visibilityFilters } from '../../../actions/todos'

const getVisibleTodos = (todos: any, filter: string): any => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter((t: any) => t.completed)
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter((t: any) => !t.completed)
    default:
      throw new Error('Unknown filters: ' + filter)
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  todos: getVisibleTodos(state.todos, ownProps.filter)
})

const mapDispatchToProps = (dispatch: any) => ({
  toggleToDo: (id: number) => dispatch(toggleToDo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
