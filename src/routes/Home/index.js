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
				<div>
					Navbar here
				</div>
        <Panel>
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
        </Panel>
	    </div>
		)
	}
}

export default Home
