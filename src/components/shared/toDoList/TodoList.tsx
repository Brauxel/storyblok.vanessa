import React from 'react'
import { ToDo } from './Todo'

export const ToDoList: React.FC = ({ todos, toggleToDo }: any) => (
  <ul>
    {todos.map((todo: any, index: number) => (
      <ToDo key={todo.id} {...todo} onClick={() => toggleToDo(todo.id)} />
    ))}
  </ul>
)
