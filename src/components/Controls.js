import React from "react";

const Controls = ({gridWidth, setGridWidth}) => {

    const handleInput = (event) => {
        setGridWidth(event.target.value);
    }

    return (
        <div id="controls">

            <button id="control_button" onClick={() => setGridWidth(gridWidth - 1)}>Fewer Colums</button>
            <input type="number" value={gridWidth} onInput={handleInput}></input>
            <button id="control_button" onClick={() => setGridWidth(gridWidth + 1)}>More Columns</button>

        </div>
    )
}

export default Controls;

