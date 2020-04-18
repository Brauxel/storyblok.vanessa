/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../../../actions/todos'

const AddTodo = ({ dispatch }: any) => {
  let input: any

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addToDo(input.value))
          input.value = ''
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
