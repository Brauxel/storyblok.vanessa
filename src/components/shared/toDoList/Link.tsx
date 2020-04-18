import React from 'react'

interface Props {
  active: boolean
  onClick: () => {}
}

export const Link: React.FC<Props> = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)
