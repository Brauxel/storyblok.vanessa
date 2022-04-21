import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ToDos } from './components/shared/toDoList/Todos'
import { Home } from './components/pages/Home'
import { AsynchApp } from './components/shared/AsynchApp/AsynchApp'
import { Provider } from 'react-redux'

interface Props {
  store: any
}

export const Root: React.FC<Props> = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home} />
      <Route path="/todos/:filter?" component={ToDos} />
      <Route path="/asynch" component={AsynchApp} />
    </Router>
  </Provider>
)
