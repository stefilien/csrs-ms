import styled from 'styled-components'
import cn from 'classnames'

import {
	colors,
	paddings,
	margins
} from '../../constants'

const Div = styled.div.attrs({
	className: cn('panel')
})`
	border-radius: 4px;
	background-color: ${colors.white};
	color: ${colors.black};
	padding: ${paddings.med} ${paddings.lrg};
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    min-height: 250px;
    min-width: 200px;
    max-width: 1024px;
    max-height: 1024px;



`

export default Div