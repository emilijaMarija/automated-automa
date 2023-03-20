import React from 'react'

import './App.css'
import RoundTileGenerator from './Components/RoundTileGenerator/RoundTileGenerator.jsx'
import GoalTileBoard from './Components/GoalTileBoard/GoalTileBoard.jsx'

function App () {
  return (
    <div className='App'>
      <h1>End-Of-Round Goal Tile Randomiser</h1>
      <div className='round-goal-tile-randomiser'>
        <RoundTileGenerator />
        <GoalTileBoard />
      </div>
    </div>
  )
}

export default App
