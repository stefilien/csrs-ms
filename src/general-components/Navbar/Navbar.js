import React from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import Button from '../Button'
import {
	colors,
	paddings,
	margins
} from '../../constants'

const Div = styled.div.attrs({
	className: cn('navbar')
})`
	display: block;
	overflow: hidden;
	background-color: ${colors.black};
	position: absolute;
	top: 0;
	width: 100%;
	height: 50px;
	color: ${colors.white};

	& > ${Button} {
		height: 50px;
		margin-left: 0px;
		float: left;
		background-color: ${colors.black};
		color: ${colors.white};
		border-radius: 0px;

		&: hover{
		
		background-color: #8e8e8e;
		}

		&.active {
			background-color: ${colors.silver}
		}
	}

	& > Brand{

	}

	}
	
`



function Navbar(props) {
	const navigateTo = (uri) => {
		props.history.push(uri)
	}

	return (
		<Div>
			<Button active={props.location.pathname === '/'} onClick={() => navigateTo('/')}> Home </Button>
			<Button active={props.location.pathname === '/student'} onClick={() => navigateTo('/student')}> Student </Button>
			</Div>
		)

}




export default Navbar