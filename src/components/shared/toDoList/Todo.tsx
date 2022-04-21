import React from 'react'

interface Props {
  onClick: () => {}
  completed: boolean
  text: string
}

export const ToDo: React.FC<Props> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)
