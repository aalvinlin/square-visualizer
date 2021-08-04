import React from "react";

const Grid = ({grid_width, squared_numbers}) => {

    const rows = Math.floor(squared_numbers ** 2 / grid_width);

    return (
        <div id="grid">

        </div>
    )
}

export default Grid;