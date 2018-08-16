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

			</div>
		)
	}
}

export default Brownies