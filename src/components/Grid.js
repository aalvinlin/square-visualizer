import React from "react";
import Cell from "./Cell";

const Grid = ({gridWidth, squaredNumbers}) => {

    const totalNumbers = squaredNumbers ** 2;
    const rows = Math.floor(totalNumbers / gridWidth);

    const cellArray = Array(totalNumbers).fill(0);

    return (
        <div id="grid">
            {
                cellArray.map((cell, id) => {
                    // if perfect square, color it black
                    if (Math.floor(Math.sqrt(id + 1)) ** 2 === id)
                        { return <Cell id={id} color="black" />; }
                    else
                        { return <Cell id={id} color="white" />; }
                })
            }
        </div>
    )
}

export default Grid;