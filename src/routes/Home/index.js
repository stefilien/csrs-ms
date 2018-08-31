import React from 'react'

import {
	Button,
	Panel
} from '../../general-components'
import {
	Table
} from '../../general-components'
import DummyData, {dummyHeader} from '../../general-components/Table/DummyData'
import Brownies from '../../components/Brownies'

// const DummyData = createDummyData()

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
	        <Table data={DummyData} headers={dummyHeader}/>
        </Panel>
	    </div>
		)
	}
}

export default Home
