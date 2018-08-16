import React from 'react'
import {Router, Route, Link} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Home from './Home'

import './index.css'

const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    )
  }
}

export default App;
