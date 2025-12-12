function finish(board, char) {
    if(board[0][0] === char && board[0][1] === char && board[0][2] === char) return true;
    if(board[1][0] === char && board[1][1] === char && board[1][2] === char) return true;
    if(board[2][0] === char && board[2][1] === char && board[2][2] === char) return true;
    
    if(board[0][0] === char && board[1][0] === char && board[2][0] === char) return true;
    if(board[0][1] === char && board[1][1] === char && board[2][1] === char) return true;
    if(board[0][2] === char && board[1][2] === char && board[2][2] === char) return true;
    
    if(board[0][0] === char && board[1][1] === char && board[2][2] === char) return true;
    if(board[0][2] === char && board[1][1] === char && board[2][0] === char) return true;
    
    return false;
}

function solution(board) {
    let count_O = 0;
    let count_X = 0;
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] == "O") count_O++;
            if(board[i][j] == "X") count_X++;
        }
    }
    
    if(!finish(board, "O") && !finish(board, "X") && (count_O-count_X === 0 || count_O-count_X === 1)) return 1;
    if(finish(board, "O") && !finish(board, "X") && count_O-count_X === 1) return 1;
    if(!finish(board, "O") && finish(board, "X") && count_O-count_X === 0) return 1;
    
    return 0;
}