import React from "react";

const Controls = ({gridWidth, setGridWidth}) => {

    const handleInput = (event) => {
        setGridWidth(event.target.value);
    }

    const handleIncrement = () => {
        setGridWidth(gridWidth + 1);
    }

    const handleDecrement = () => {
        setGridWidth(gridWidth - 1);
    }

    return (
        <div id="controls">

            <button id="control_button" onClick={handleDecrement}>Fewer Colums</button>
            <input type="number" value={gridWidth} onInput={handleInput}></input>
            <button id="control_button" onClick={handleIncrement}>More Columns</button>

        </div>
    )
}

export default Controls;

