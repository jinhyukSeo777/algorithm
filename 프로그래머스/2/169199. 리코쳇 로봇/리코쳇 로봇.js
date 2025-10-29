function getLocation(y,x,dy,dx,board) {
    let [ny, nx] = [y, x];
    
    while(true) {
        const [ty, tx] = [ny+dy, nx+dx];
        if(ty < 0 || ty >= board.length || tx < 0 || tx >= board[0].length) break;
        if(board[ty][tx] === "D") break;
        ny=ty;
        nx=tx;
    }
    
    return [ny, nx];
}

function solution(board) {
    const d = [[0,1],[0,-1],[1,0],[-1,0]];
    const arr = new Array(board.length).fill(null).map((v)=>new Array(board[0].length).fill(Infinity));
    let start, goal;
    
    board.forEach((value, i)=>{
        value.split("").forEach((v, j)=>{
            if(v === "R") start = [i, j];
            if(v === "G") goal = [i, j];
        })
    })
    
    const queue = [];
    queue.push(start);
    arr[start[0]][start[1]] = 0;
    
    while(queue.length > 0) {
        const [y, x] = queue.shift();
        for(let [dy, dx] of d) {
            const [ny, nx] = getLocation(y,x,dy,dx,board);
            if(ny >= 0 && ny < board.length && nx >= 0 && nx < board[0].length) {
                if(board[ny][nx] !== "D" && arr[ny][nx] > arr[y][x]+1) {
                    arr[ny][nx] = arr[y][x]+1;
                    queue.push([ny, nx]);
                }
            }
        }
    }
    
    return arr[goal[0]][goal[1]] === Infinity ? -1 : arr[goal[0]][goal[1]];
}