import React, { useContext, useState } from 'react'

import './round-tile-generator.scss'
import Checkbox from '../Checkbox/Checkbox.jsx'
import RoundGoalTile from '../RoundGoalTile/RoundGoalTile.jsx'
import Button from '../Button/Button.jsx'
import {
  europeGoalTileData,
  vanillaGoalTileData
} from '../RoundGoalTile/goal-tile-data.js'
import { GoalTileOnScreenContext } from '../../Context/GoalTileOnScreenContext.jsx'

function RoundTileGenerator () {
  const { goalTiles, addGoalTile } = useContext(GoalTileOnScreenContext)
  const [preferences, setPreferences] = useState({
    europeEnabled: false
  })
  const [goalTile, setGoalTile] = useState({})

  const setRandomGoalTile = () => {
    let tileData

    if (preferences.europeEnabled) {
      tileData = vanillaGoalTileData.concat(europeGoalTileData)
    } else {
      tileData = vanillaGoalTileData
    }

    const availableTiles = tileData.filter(
      ({ id }) => !goalTiles.some(tile => tile && tile.id === id)
    )
    const newTile =
      availableTiles[Math.floor(Math.random() * availableTiles.length)]

    setGoalTile(newTile)
    addGoalTile(newTile)
  }

  const handleExpansions = e => {
    setPreferences(prev => ({ ...prev, europeEnabled: e.target.checked }))
  }

  return (
    <div className='generator-container'>
      <Checkbox
        labelText='INCLUDE EUROPEAN EXPANSION TILES'
        onChange={handleExpansions}
      />
      <div className='generator-tile-container'>
        <RoundGoalTile {...goalTile} />
      </div>
      <Button onClick={setRandomGoalTile} text='New Tile' />
    </div>
  )
}

export default RoundTileGenerator
