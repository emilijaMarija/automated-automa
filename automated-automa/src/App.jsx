import React from "react";

import './App.css'
import RoundGoalTile from "./Components/RoundGoalTile.jsx";
import {GoalTileData} from "./Components/goal-tile-data.js";

function App() {
    return (
        <div className="App">
            {GoalTileData.map((item, index) =>
                <RoundGoalTile key={index} {...item} />
            )}
        </div>
    )
}

export default App
