import { createContext, useState } from 'react'
import { arrayOf, func, object } from 'prop-types'

export const GoalTileOnScreenContext = createContext({})

export const GoalTileProvider = ({ children }) => {
  const [goalTiles, setGoalTiles] = useState([])
  const addGoalTile = tile => {
    if (goalTiles.length < 4) {
      setGoalTiles(prev => [...prev, tile])
    }
  }

  const removeGoalTile = tileIndex => {
    setGoalTiles(prev => prev.filter(tile => tile !== prev[tileIndex]))
  }

  return (
    <GoalTileOnScreenContext.Provider
      value={{ goalTiles, addGoalTile, removeGoalTile }}
    >
      {children}
    </GoalTileOnScreenContext.Provider>
  )
}

GoalTileOnScreenContext.propTypes = {
  goalTiles: arrayOf(object),
  addGoalTile: func
}
