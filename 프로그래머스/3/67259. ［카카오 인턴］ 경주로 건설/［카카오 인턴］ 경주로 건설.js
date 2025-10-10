function solution(board) {
    const d = [[1,0,1], [-1,0,1], [0,1,0], [0,-1,0]];
    const arr = new Array(board.length).fill(null).map((v)=>new Array(board[0].length).fill(null).map((v)=>new Array(2).fill(Infinity)));
    
    const queue = [];
    arr[0][0][0] = 0;
    arr[0][0][1] = 0;
    queue.push([0,0,0]);
    queue.push([0,0,1]);
    
    while(queue.length > 0) {
        const [y, x, dir] = queue.shift();
        for(let [dy, dx, ddir] of d) {
            const ny = y + dy, nx = x + dx;
            if(ny >= 0 && ny < board.length && nx >= 0 && nx < board[0].length) {
                if(board[ny][nx] === 0 && dir === ddir && arr[ny][nx][dir] > arr[y][x][dir]+100) {
                    arr[ny][nx][dir] = arr[y][x][dir]+100;
                    queue.push([ny, nx, dir]);
                }
                if(board[ny][nx] === 0 && dir !== ddir && arr[ny][nx][ddir] > arr[y][x][dir]+600) {
                    arr[ny][nx][ddir] = arr[y][x][dir]+600;
                    queue.push([ny, nx, ddir]);
                }
            }
        }
    }
    
    return Math.min(arr[board.length-1][board[0].length-1][0], arr[board.length-1][board[0].length-1][1]);
}