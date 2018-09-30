import React from 'react'
import {Router} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import {Navbar} from '../general-components'

import Layout from './Layout'

import './index.css'

const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
        	<div>
          	<Navbar/>
            <Layout />
        	</div>
        </Router>
      </div>
    )
  }
}

export default App;