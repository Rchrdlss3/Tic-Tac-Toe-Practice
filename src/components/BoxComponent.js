import { useContext, useEffect, useState } from "react"
import { TurnContext } from "./BoardComponent";
import { BOARD_ROWS, isWinner, NUM_OF_PLAYERS } from "../helper";

export default function BoxComponent ({width,height,indexes,board,setBoard}) {
    const [numOfTurns,setNumOfTurns] = useContext(TurnContext);
    const [symbol,setSymbol] = useState('');

    useEffect(()=> {
        setSymbol(numOfTurns%2==0 ? 'X':'O')
    },[numOfTurns]);

    return (
        <div style = {{border: '1px solid', width: width, height: height,alignContent:'center',fontSize: '10vh'}}
            onClick = {() => {
                setNumOfTurns(numOfTurns + 1)
                if (numOfTurns >= (BOARD_ROWS*NUM_OF_PLAYERS)-1) {
                    console.log(isWinner(board,symbol))
                } else {
                    console.log('hello')
                }
                const updatedBoard = board
                updatedBoard[indexes[0]][indexes[1]] = symbol
                setBoard(updatedBoard)
            }}
        > {board[indexes[0]][indexes[1]]}</div>
    )
}