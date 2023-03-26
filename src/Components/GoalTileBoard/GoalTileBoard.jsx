import './goal-tile-board.scss'
import GoalTileBoardImage from '../../Assets/images/Goal-board.png'
import RoundGoalTile from '../RoundGoalTile/RoundGoalTile.jsx'
import { useContext } from 'react'
import { GoalTileOnScreenContext } from '../../Context/GoalTileOnScreenContext.jsx'

function GoalTileBoard () {
  const { goalTiles, removeGoalTile } = useContext(GoalTileOnScreenContext)

  return (
    <div className='board-container'>
      <img className='board-image' src={GoalTileBoardImage} alt='' />
      <div className='tile-container'>
        {goalTiles.map((tile, i) =>
          tile === null
            ? (
              <div key={i}> </div>
              )
            : (
              <div key={i}>
                <button
                  type='button'
                  aria-label='Remove'
                  aria-hidden='true'
                  className='remove-tile-button'
                  onClick={() => removeGoalTile(i)}
                >
                  &times;
                </button>
                <RoundGoalTile {...tile} />
              </div>
              )
        )}
      </div>
    </div>
  )
}

export default GoalTileBoard
