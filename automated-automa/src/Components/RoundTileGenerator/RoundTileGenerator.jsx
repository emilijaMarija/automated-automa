import React, { useState } from 'react'

import './round-tile-generator.css'
import Checkbox from '../Checkbox/Checkbox.jsx'
import RoundGoalTile from '../RoundGoalTile/RoundGoalTile.jsx'
import Button from '../Button/Button.jsx'
import {
  europeGoalTileData,
  vanillaGoalTileData
} from '../RoundGoalTile/goal-tile-data.js'

function RoundTileGenerator () {
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

    setGoalTile(tileData[Math.floor(Math.random() * tileData.length)])
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
      <RoundGoalTile {...goalTile} />
      <Button onClick={setRandomGoalTile} text='New Tile' />
    </div>
  )
}

export default RoundTileGenerator
