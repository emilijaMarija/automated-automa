import React from 'react'

import './App.css'
import RoundTileGenerator from './Components/RoundTileGenerator/RoundTileGenerator.jsx'
import GoalTileBoard from './Components/GoalTileBoard/GoalTileBoard.jsx'

function App () {
  return (
    <div className='App'>
      <RoundTileGenerator />
      <GoalTileBoard />
    </div>
  )
}

export default App
