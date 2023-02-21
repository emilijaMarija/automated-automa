import React, { useState } from 'react'

import './App.css'
import RoundGoalTile from './Components/RoundGoalTile/RoundGoalTile.jsx'
import Button from './Components/Button/Button.jsx'
import {
  vanillaGoalTileData,
  europeGoalTileData
} from './Components/RoundGoalTile/goal-tile-data.js'
import Checkbox from './Components/Checkbox/Checkbox.jsx'

function App () {
  const [tileData, setTileData] = useState(vanillaGoalTileData)
  const [goalTileIndex, setGoalTileIndex] = useState(
    Math.floor(Math.random() * tileData.length)
  )

  const setRandomGoalIndex = () => {
    setGoalTileIndex(Math.floor(Math.random() * tileData.length))
  }

  const handleExpansions = e => {
    e.target.checked
      ? setTileData(vanillaGoalTileData.concat(europeGoalTileData))
      : setTileData(vanillaGoalTileData)
  }

  return (
    <div className='App'>
      <Checkbox
        text='INCLUDE EUROPEAN EXPANSION TILES'
        onChange={handleExpansions}
      />
      <RoundGoalTile {...tileData[goalTileIndex]} />
      <Button onClick={setRandomGoalIndex} text='New Tile' />
    </div>
  )
}

export default App
