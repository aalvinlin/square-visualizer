import React from "react";

const Cell = ({id, color}) => {
    return (
        <div id={`cell_${id}`} class={`cell_${color}`}></div>
    )
}

export default Cell;