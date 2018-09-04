import styled from 'styled-components'
import cn from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import {
  colors,
  paddings
} from '../../constants'

export const StyledTable = styled.table.attrs({
  className: 'table'
})`

  border-collapse: collapse;
  border-color: ${colors.black};

  th {
    padding: ${paddings.sml};
  }
  tbody{
    tr:nth-child(even) {
      padding: ${paddings.sml}; 
      background: ${colors.white};
    }

    tr:nth-child(odd) {
      padding: ${paddings.sml};
      background: ${colors.silver};
    }
  }
`

function Table(props) {
  console.log(props)

  const getHeader = () => {
    return (
      <tr>
        {
          props.headers.map((header) => {
              return (
                <th key={header}>{header}</th>       
              )
          })
        }
      </tr>
    )
  }

  const getFields = () => {
    return Object.keys(props.data[0])
  }

  const getData = () => {
    const fields = getFields() 
      return props.data.map((item, index) => {
        const getFieldValues = () => {
          return fields.map((field, index2) => {
            return (<td key={`${index}-${index2}`}>{item[field]}</td>)
          })
        }

        return (
          <tr key={index}>
            {getFieldValues()}
          </tr>
        )
      })
    }

    return (
      <StyledTable>
        <thead>
          {getHeader()}
        </thead>
        <tbody>
          {getData()}
        </tbody>
      </StyledTable>
    )
}
  
Table.propTypes={
  data: PropTypes.array.isRequired
}

export default Table