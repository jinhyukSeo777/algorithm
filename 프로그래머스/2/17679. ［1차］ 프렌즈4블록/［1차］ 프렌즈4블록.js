function solution(m, n, board) {
    let pang = true;
    
    while(pang) {
        pang = false;
        const arr = new Array(m).fill(null).map((v)=>new Array(n).fill(undefined));
        
        for(let i = 0; i < m-1; i++) {
            for(let j = 0; j < n-1; j++) {
                if(board[i][j] !== " " && board[i][j] === board[i][j+1] && board[i][j] === board[i+1][j] && board[i][j] === board[i+1][j+1]) {
                    arr[i][j] = arr[i+1][j] = arr[i][j+1] = arr[i+1][j+1] = " ";
                    pang = true;
                }
            }
        }
        
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(arr[i][j] === undefined) {
                    arr[i][j] = board[i][j];
                }
            }
        }
        
        for (let j = 0; j < n; j++) {
            for(let i = m-1; i >= 0; i--) {
                if(arr[i][j] !== " ") continue;
                else {
                    for(let k = i-1; k >= 0; k--) {
                        if(arr[k][j] !== " ") {
                            arr[i][j] = arr[k][j];
                            arr[k][j] = " ";
                            break;
                        }
                    }
                }
            }
        }
        
        board = arr;
    }
    
    return [...board.flat()].filter((v)=>v===" ").length;
}