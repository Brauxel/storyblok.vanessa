/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { Footer } from './Footer'
import AddToDo from '../../containers/todos/AddToDo'
import VisibleTodoList from '../../containers/todos/VisibleTodoList'

interface Props {
  match: any
}

export const ToDos: React.FC = ({ match: { params } }: any): any => (
  <div>
    <AddToDo />
    <VisibleTodoList filter={params?.filter || 'SHOW_ALL'} />
    <Footer />
  </div>
)
