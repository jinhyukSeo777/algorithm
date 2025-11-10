function solution(board) {
    const height = board.length;
    const width = board[0].length;
    const d = [[1,0,1], [-1,0,1], [0,1,0], [0,-1,0]];
    const arr = new Array(height).fill(null).map((v)=>new Array(width).fill(null).map((v)=>new Array(2).fill(Infinity)));
    
    const queue = [];
    arr[0][0][0] = 0;
    arr[0][0][1] = 0;
    queue.push([0,0,0]);
    queue.push([0,0,1]);
    
    while(queue.length > 0) {
        const [y, x, dir] = queue.shift();
        for(let [dy, dx, ddir] of d) {
            const ny = y + dy, nx = x + dx;
            if(ny >= 0 && ny < height && nx >= 0 && nx < width) {
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
    
    return Math.min(arr[height-1][width-1][0], arr[height-1][width-1][1]);
}