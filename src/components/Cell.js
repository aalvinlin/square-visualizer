import React from "react";

const Cell = ({row, col, color}) => {
    return (
        <div id={`cell_${row}_${col}`} class={`cell_${color}`}></div>
    )
}

export default Cell;