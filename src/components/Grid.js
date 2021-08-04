import React from "react";

const Grid = ({gridWidth, squaredNumbers}) => {

    const rows = Math.floor(squaredNumbers ** 2 / gridWidth);

    return (
        <div id="grid">

        </div>
    )
}

export default Grid;