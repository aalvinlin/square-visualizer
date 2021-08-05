import React from "react";

const Controls = ({currentWidth, changeWidth}) => {
    return (
        <div id="controls">

            <button id="control_button" onClick={() => changeWidth(-1)}>Fewer Colums</button>
            <input type="number" value={currentWidth}></input>
            <button id="control_button" onClick={() => changeWidth(1)}>More Columns</button>

        </div>
    )
}

export default Controls;

