import React, { useEffect, useState } from 'react';
import LudotekaUtil from "./LudotekaUtil";

const Ludoteka = (props) => {
    const [ board, setBoard ] = useState([]);
    const [ winner, setWinner ] = useState(0);
    useEffect(() => {
        debugger;
        const game = new LudotekaUtil(7, 6);
        let win = game.input([1,1,2,2,4,3,5,3,5,0,0,1,0,0]);

        let b = game.getBoard();
        setBoard([ ...b.reverse() ]);
        setWinner(win);
    } , []);
    return (<div>
        <div className={`ludoteka`}>
        {
            board.map((row, r) => row.map((col, c) =>
                <div key={`${r}_${c}`} row={`${r}`} col={`${c}`} className={`col`}>{ board[r][c] }</div> ))
        }
        </div>
        {
            (winner === 0) ? <div>{`It's a draw`}</div> : <div>{`Player ${winner} wins!`}</div>
        }
    </div>)
};
export default Ludoteka;