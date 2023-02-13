import React, {useState} from "react";

import './App.css'
import RoundGoalTile from "./Components/RoundGoalTile.jsx";
import {goalTileData, europeGoalTileData} from "./Components/goal-tile-data.js";

function App() {
    const [tileData, setTileData] = useState(goalTileData)
    const [goalTileIndex, setGoalTileIndex] = useState(Math.floor(Math.random() * tileData.length))

    const setRandomGoalIndex = () => {
        setGoalTileIndex(Math.floor(Math.random() * tileData.length))
    }

    const handleExpansions = (e) => {
        e.target.checked ? setTileData(goalTileData.concat(europeGoalTileData)) : setTileData(goalTileData)
    }

    return (
        <div className="App">
            <div className="checkbox-container">
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
