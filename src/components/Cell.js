import React from "react";

const Cell = ({id, color}) => {
    return (
        <div id={`cell_${id}`} class={`cell cell_${color}`}>{color === "white" ? "" : id}</div>
    )
}

export default Cell;