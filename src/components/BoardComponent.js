import { createContext, useEffect, useState } from "react";
import BoxComponent from "./BoxComponent";
import { BOARD_ROWS, createBoard, isWinner, NUM_OF_PLAYERS } from "../helper";

export const TurnContext = createContext();

export default function BoardComponent () {
    const [board,setBoard] = useState(createBoard(BOARD_ROWS));
    const [numOfTurns,setNumOfTurns] = useState(0);
    const [turn,setTurn] = useState('');
    // Need at least 3 in a row to be a winner, so number of turns. Max num of turns is n*n
    // To check if there's winner, it must be n*2(2 being num of players)

        // If iswinner && num turns, it's draw
        //if is winner, winner
        //if is winner & num turns still <, keep going.

    return (
        <TurnContext.Provider value = {[numOfTurns,setNumOfTurns]}>
        <div style = {{
            display: 'grid',
            gridTemplateColumns: `repeat(${BOARD_ROWS},1fr)`,
            gridGap: '5px'}}>
            {board.map((row,idx) => {
                return row.map((box,boxIdx) => {return <BoxComponent 
                    width={100} 
                    height = {100} 
                    board = {board}
                    setBoard = {setBoard}
                    indexes = {[idx,boxIdx]}/>})
            })}
        </div>
        </TurnContext.Provider>
    )
}