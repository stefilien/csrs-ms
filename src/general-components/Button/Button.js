import styled from 'styled-components'
import cn from 'classnames'

import {
  colors,
  paddings,
  margins
} from '../../constants'

export const Button = styled.button.attrs({
  className: (props) => cn('btn', {
    'primary': props.primary,
    'secondary': props.secondary,
    'active': props.active
  })
})`
  border-radius: 4px;
  border: none;
  color: ${colors.black};
  padding: ${paddings.med} ${paddings.lrg};

  & + & {
    margin-left: ${margins.sml};
  }

  &.primary {
    background-color: ${colors.indigo};
    color: ${colors.white};
  }

  &.secondary {
    background-color: ${colors.orange};
    color: ${colors.white};
  }
`

export default Button
