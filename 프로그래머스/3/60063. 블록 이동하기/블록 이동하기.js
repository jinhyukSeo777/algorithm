function solution(board) {
    const len = board.length;
    const arr = new Array(len).fill(null).map((v)=>new Array(len).fill(null).map((v)=>[Infinity, Infinity]));

    const queue = [];
    arr[0][0][0] = 0;
    queue.push([0, 0, 0]);
    
    while(queue.length > 0) {
        const [y, x, d] = queue.shift();
        
        // d = 0, 위 이동
        if(d === 0 && y-1 >= 0 && board[y-1][x] === 0 && board[y-1][x+1] === 0) {
            if(arr[y][x][0]+1 < arr[y-1][x][0]) {
                arr[y-1][x][0] = arr[y][x][0]+1;
                queue.push([y-1, x, 0]);
            }
        }
        
        // d = 0, 아래 이동
        if(d === 0 && y+1 < len && board[y+1][x] === 0 && board[y+1][x+1] === 0) {
            if(arr[y][x][0]+1 < arr[y+1][x][0]) {
                arr[y+1][x][0] = arr[y][x][0]+1;
                queue.push([y+1, x, 0]);
            }
        }
        
        // d = 0, 왼쪽 이동
        if(d === 0 && x-1 >= 0 && board[y][x-1] === 0) {
            if(arr[y][x][0]+1 < arr[y][x-1][0]) {
                arr[y][x-1][0] = arr[y][x][0]+1;
                queue.push([y, x-1, 0]);
            }
        }
        
        // d = 0, 오른쪽 이동
        if(d === 0 && x+2 < len && board[y][x+2] === 0) {
            if(arr[y][x][0]+1 < arr[y][x+1][0]) {
                arr[y][x+1][0] = arr[y][x][0]+1;
                queue.push([y, x+1, 0]);
            }
        }
        
        // d = 1, 위 이동
        if(d === 1 && y-1 >= 0 && board[y-1][x] === 0) {
            if(arr[y][x][1]+1 < arr[y-1][x][1]) {
                arr[y-1][x][1] = arr[y][x][1]+1;
                queue.push([y-1, x, 1]);
            }
        }
        
        // d = 1, 아래 이동
        if(d === 1 && y+2 < len && board[y+2][x] === 0) {
            if(arr[y][x][1]+1 < arr[y+1][x][1]) {
                arr[y+1][x][1] = arr[y][x][1]+1;
                queue.push([y+1, x, 1]);
            }
        }
        
        // d = 1, 왼쪽 이동
        if(d === 1 && x-1 >= 0 && board[y][x-1] === 0 && board[y+1][x-1] === 0) {
            if(arr[y][x][1]+1 < arr[y][x-1][1]) {
                arr[y][x-1][1] = arr[y][x][1]+1;
                queue.push([y, x-1, 1]);
            }
        }
        
        // d = 1, 오른쪽 이동
        if(d === 1 && x+1 < len &&  board[y][x+1] === 0 && board[y+1][x+1] === 0) {
            if(arr[y][x][1]+1 < arr[y][x+1][1]) {
                arr[y][x+1][1] = arr[y][x][1]+1;
                queue.push([y, x+1, 1]);
            }
        }
        
        // d = 0
        if(d === 0) {
            // 위 회전
            if(y-1 >= 0 && board[y-1][x] === 0 && board[y-1][x+1] === 0) {
                if(arr[y][x][0]+1 < arr[y-1][x][1]) {
                    arr[y-1][x][1] = arr[y][x][0]+1;
                    queue.push([y-1, x, 1]);
                }
                if(arr[y][x][0]+1 < arr[y-1][x+1][1]) {
                    arr[y-1][x+1][1] = arr[y][x][0]+1;
                    queue.push([y-1, x+1, 1]);
                }
            }
            
            // 아래 회전
            if(y+1 < len && board[y+1][x] === 0 && board[y+1][x+1] === 0) {
                if(arr[y][x][0]+1 < arr[y][x][1]) {
                    arr[y][x][1] = arr[y][x][0]+1;
                    queue.push([y, x, 1]);
                }
                if(arr[y][x][0]+1 < arr[y][x+1][1]) {
                    arr[y][x+1][1] = arr[y][x][0]+1;
                    queue.push([y, x+1, 1]);
                }
            }
        }
        
        // d = 1
        if(d === 1) {
            // 위 회전
            if(x-1 >= 0 && board[y][x-1] === 0 && board[y+1][x-1] === 0) {
                if(arr[y][x][1]+1 < arr[y][x-1][0]) {
                    arr[y][x-1][0] = arr[y][x][1]+1;
                    queue.push([y, x-1, 0]);
                }
                if(arr[y][x][1]+1 < arr[y+1][x-1][0]) {
                    arr[y+1][x-1][0] = arr[y][x][1]+1;
                    queue.push([y+1, x-1, 0]);
                }
            }
            
            // 아래 회전
            if(x+1 < len && board[y][x+1] === 0 && board[y+1][x+1] === 0) {
                if(arr[y][x][1]+1 < arr[y][x][0]) {
                    arr[y][x][0] = arr[y][x][1]+1;
                    queue.push([y, x, 0]);
                }
                if(arr[y][x][1]+1 < arr[y+1][x][0]) {
                    arr[y+1][x][0] = arr[y][x][1]+1;
                    queue.push([y+1, x, 0]);
                }
            }
        }
    }
    
    return Math.min(arr[len-1][len-2][0], arr[len-2][len-1][1]);
}