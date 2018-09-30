import React from 'react'
import {
	Switch,
	Route,
	withRouter
} from 'react-router'


// Route Components
import Home from './Home'
import Student from './student'

const routes = [
	
]

class Layout extends React.PureComponent {
	render() {
		return (
			<div style={{marginTop: '50px'}}>
	        	<Switch location={this.props.location} >
		        	<Route exact path="/" component={Home} />
		        	<Route path="/student" component={Student} />
	        	</Switch>
	        </div>
		)
	}
}
export default withRouter(Layout)