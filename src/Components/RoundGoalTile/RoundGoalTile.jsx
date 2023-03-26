import './round-goal-tile.css'
import { string, shape, arrayOf } from 'prop-types'
import TextResponsiveToContainerSize from '../TextResponsiveToContainerSize/TextResponsiveToContainerSize.jsx'

const RoundGoalTile = ({ text1, icon1, text2, icon2, background }) => {
  return (
    <div className='goal-tile__corners'>
      <div
        className='goal-tile__bg-image'
        style={background && { backgroundImage: `url(${background})` }}
      >
        {text1 && <TextResponsiveToContainerSize text={text1} />}
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
        {text2 && <TextResponsiveToContainerSize text={text2} />}
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
