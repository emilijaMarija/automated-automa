import './goal-tile-board.css'
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
          tile === null ? (
            <div key={i}> </div>
          ) : (
            <div className='goal-tile-on-board-container' key={i}>
              <span
                className='remove-tile-button'
                onClick={() => removeGoalTile(i)}
              >
                &times;
              </span>
              <RoundGoalTile {...tile} />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default GoalTileBoard
