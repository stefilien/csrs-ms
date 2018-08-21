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

function Heading(props) {
	const {level, children} = props

	const getHeading = () => {
		switch (this.props) {
			case 1: 
			return (
				<h1>
					{children}
				</h1>
			)
			case 2: 
			return (
				<h2>
					{children}
				</h2>
			)
			case 3: 
			return (
				<h3>
					{children}
				</h3>
			)
			case 4: 
			return (
				<h4>
					{children}
				</h4>
			)
			case 5: 
			return (
				<h5>
					{children}
				</h5>
			)

		}
	}
}

Heading.propTypes = {
	level: PropTypes.number,
	children: PropTypes.any.isRequired
}

Heading.defaultProps = {
	level: 5
}