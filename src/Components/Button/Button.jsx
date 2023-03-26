import { func, string } from 'prop-types'
import './button.scss'

const Button = ({ onClick, text }) => {
  return (
    <button className='button' onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: string,
  onClick: func
}

export default Button
