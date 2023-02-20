import React, { useState } from 'react'

import './App.css'
import RoundGoalTile from './Components/RoundGoalTile.jsx'
import { vanillaGoalTileData, europeGoalTileData } from './Components/goal-tile-data.js'

function App () {
  const [tileData, setTileData] = useState(vanillaGoalTileData)
  const [goalTileIndex, setGoalTileIndex] = useState(Math.floor(Math.random() * tileData.length))

  const setRandomGoalIndex = () => {
    setGoalTileIndex(Math.floor(Math.random() * tileData.length))
  }

  const handleExpansions = (e) => {
    e.target.checked ? setTileData(vanillaGoalTileData.concat(europeGoalTileData)) : setTileData(vanillaGoalTileData)
  }

  return (
    <div className='App'>
      <div className='checkbox-container'>
        <label>
          <input type='checkbox' onChange={handleExpansions} />
          INCLUDE EUROPEAN EXPANSION TILES
        </label>
      </div>
      <RoundGoalTile {...tileData[goalTileIndex]} />
      <button onClick={setRandomGoalIndex}>New Tile</button>
    </div>
  )
}

export default App
