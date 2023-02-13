import React from "react";

import './App.css'
import RoundGoalTile from "./Components/RoundGoalTile.jsx";
import {GoalTileData} from "./Components/goal-tile-data.js";

function App() {
    const randomGoalIndex = Math.floor(Math.random() * GoalTileData.length)

    return (
        <div className="App">
            <RoundGoalTile {...GoalTileData[randomGoalIndex]} />
        </div>
    )
}

export default App
