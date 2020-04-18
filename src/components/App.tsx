import React from 'react'
import { Footer } from './shared/toDoList/Footer'
import AddToDo from './containers/todos/AddToDo'
import VisibleTodoList from './containers/todos/VisibleTodoList'

export const App = (): any => (
  <div>
    <AddToDo />
    <VisibleTodoList />
    <Footer />
  </div>
)
