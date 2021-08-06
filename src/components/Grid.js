import React from "react";
import Cell from "./Cell";

const Grid = ({gridWidth, squaredNumbers}) => {

    const totalNumbers = squaredNumbers ** 2;
    
    const cellArray = Array(totalNumbers).fill(0);

    return (
        <div id="grid" style={{width: gridWidth * 10 + "px"}}>
            {
                cellArray.map((cell, id) => {
                    
                    // start counting from 1
                    id += 1;
                    const root = Math.sqrt(id);

                    // if perfect square, color it black
                    if (Math.floor(root) ** 2 === id)
                        { return <Cell key={`cell_${root}`} id={root} color="black" />; }
                    else
                        { return <Cell key={`cell_${root}`} id={root} color="white" />; }
                })
            }
        </div>
    )
}

export default Grid;