export const BOARD_ROWS = 3;
export const NUM_OF_PLAYERS = 2;

export const createBoard = (rows) => {
    const board = [];
    for (let i = 0; i < rows; i++) {
        board.push(new Array(rows).fill())
    }
    return board
}
const inARow = (row,char) => {
    for (let i = 0; i < row.length; i++) {
        if (row[i] != char) {return false}
    }
    return true
}
export const isWinner = (board,char) => {
    const rows = board.length; const output = [];
    for (let i = 0; i < rows; i++) {
        if (inARow(board[i],char)) {return i}
        for (let j = 0; j < board[i]; j++) {

        }
        
    }
    return output.length == inARow ? output : null;
    // Depending on who's turn it is, that's the character we want to check if it's a winner.
    // If we've reached out all turns, in the main, then just put draw
    // Return false if no winner.
    // Return the indices of where they won.
    // Pattern to winning is 0,0,0/0,1,2 
}