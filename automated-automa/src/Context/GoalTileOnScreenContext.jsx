import { createContext, useState } from 'react'
import { arrayOf, func, object } from 'prop-types'

export const GoalTileOnScreenContext = createContext({})

export const GoalTileProvider = ({ children }) => {
  const [goalTiles, setGoalTiles] = useState([null, null, null, null])
  const addGoalTile = tile => {
    setGoalTiles(prev => {
      const copy = [...prev]

      const i = copy.indexOf(null)
      if (i === -1) {
        return copy
      }
      copy[i] = tile
      return copy
    })
  }

  const removeGoalTile = tileIndex => {
    setGoalTiles(prev =>
      prev.map((element, i) => (tileIndex === i ? null : element))
    )
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
