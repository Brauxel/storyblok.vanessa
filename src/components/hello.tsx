import React from 'react'

interface Props {
  name?: string
}

export const Hello: React.FC<Props> = () => <h1>Hello</h1>
