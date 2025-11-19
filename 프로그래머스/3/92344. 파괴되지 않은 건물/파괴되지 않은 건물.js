function solution(board, skill) {
    let answer = 0;
    const arr = new Array(1001).fill(null).map((v)=>new Array(1001).fill(0));
    
    for(let [type, r1, c1, r2, c2, degree] of skill) {
        if(type === 1) degree*=-1;
        
        arr[r1][c1] += degree;
        arr[r1][c2+1] -= degree;
        arr[r2+1][c1] -= degree;
        arr[r2+1][c2+1] += degree;
    }
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 1; j < board[0].length; j++) {
            arr[i][j] += arr[i][j-1];
        }
    }
    
    for(let j = 0; j < board[0].length; j++) {
        for(let i = 1; i < board.length; i++) {
            arr[i][j] += arr[i-1][j];
        }
    }
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] + arr[i][j] > 0) answer++;
        }
    }
    
    return answer;
}