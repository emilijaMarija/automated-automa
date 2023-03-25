import { func, string } from 'prop-types'
import './checkbox.css'
import React from 'react'

const Checkbox = ({ onChange, labelText }) => {
  return (
    <label className='checkbox-label'>
      <input className='checkbox-input' type='checkbox' onChange={onChange} />
      {labelText}
    </label>
  )
}

Checkbox.propTypes = {
  labelText: string,
  onChange: func
}

export default Checkbox
