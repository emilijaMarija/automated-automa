import './round-goal-tile.css'
import { string, shape, arrayOf } from 'prop-types'

const RoundGoalTile = ({ text1, icon1, text2, icon2, background }) => {
  return (
    <div className='goal-tile__corners'>
      <div
        className='goal-tile__bg-image'
        style={background && { backgroundImage: `url(${background})` }}
      >
        {text1 && (
          <svg className='goal-tile__text' viewBox='0 0 60 17'>
            <text
              x='50%'
              y='50%'
              dominantBaseline='central'
              textAnchor='middle'
            >
              {text1}
            </text>
          </svg>
        )}
        {icon1 && (
          <div className='goal-tile__icon-container'>
            {icon1.map((image, index) => (
              <img
                key={index}
                className='goal-tile__icon'
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        )}
        {text2 && (
          <svg className='goal-tile__text' viewBox='0 0 60 17'>
            <text
              x='50%'
              y='50%'
              dominantBaseline='central'
              textAnchor='middle'
              className='goal-tile__text'
            >
              {text2}
            </text>
          </svg>
        )}
        {icon2 && (
          <div className='goal-tile__icon-container'>
            {icon2.map((image, index) => (
              <img
                key={index}
                className='goal-tile__icon'
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

RoundGoalTile.propTypes = {
  text1: string,
  icon1: arrayOf(
    shape({
      src: string,
      alt: string
    })
  ),
  text2: string,
  icon2: arrayOf(
    shape({
      src: string,
      alt: string
    })
  ),
  background: string
}

export default RoundGoalTile
