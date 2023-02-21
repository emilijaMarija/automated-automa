import { func, string } from 'prop-types'
import './checkbox.css'
import React from 'react'

const Checkbox = ({ onChange, text }) => {
  return (
    <label className='checkbox-label'>
      <input className='checkbox-input' type='checkbox' onChange={onChange} />
      {text}
    </label>
  )
}

Checkbox.propTypes = {
  text: string,
  onChange: func
}

export default Checkbox
