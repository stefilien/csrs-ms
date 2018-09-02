import React from 'react'
import PropTypes from 'prop-types'

class Brownies extends React.Component {
	static propTypes = {
		numberOfBrownies: PropTypes.number.isRequired
	}

	subtractByTwo = (value) => {
		return value - 2
	}

	render() {
		const {numberOfBrownies} = this.props
		return (
			<div>
				{
					this.subtractByTwo(numberOfBrownies) === 0 &&
					<p>No more brownies</p>
				}

				<h1>Brownies</h1>
				<h2>Brownies</h2>
				<h3>Brownies</h3>
				<h4>Brownies</h4>
				<h5>Brownies</h5>

			</div>
		)
	}
}

export default Brownies
