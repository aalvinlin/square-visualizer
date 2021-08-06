import React from "react";

const Controls = ({gridWidth, setGridWidth}) => {
    return (
        <div id="controls">

            <button id="control_button" onClick={() => setGridWidth(gridWidth - 1)}>Fewer Colums</button>
            <input type="number" value={gridWidth}></input>
            <button id="control_button" onClick={() => setGridWidth(gridWidth + 1)}>More Columns</button>

        </div>
    )
}

export default Controls;

