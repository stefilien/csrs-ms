import React from 'react'

import {
	Button,
	Panel
} from '../../general-components'
import Brownies from '../../components/Brownies'

class Home extends React.Component {
	render() {
		return (
			<div>
				<header className="App-header">
	        <h1 className="App-title">Welcome to React</h1>
	      </header>
	      <p className="App-intro">
	        To get started, edit <code>src/App.js</code> and save to reload.
	      </p>
	      <Brownies numberOfBrownies={2}/>
	      <Button>
	      	A Button
	      </Button>
	      <Button primary>
	      	A Primary Button
	      </Button>
	      <Button secondary>
	      	A Secondary Button
	      </Button>
        <Panel>
        	asdfjlaksdjf
        </Panel>
	    </div>
		)
	}
}

export default Home
