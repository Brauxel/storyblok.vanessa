import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  active: boolean
  filter: string
  onClick: () => {}
}

export const Link: React.FC<Props> = ({
  filter,
  active,
  children,
  onClick
}) => (
  <NavLink
    exact
    to={filter === 'SHOW_ALL' ? '/todos' : `/todos/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
)
