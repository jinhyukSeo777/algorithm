function getStatus(arr) {
    const column = arr.length;
    const row = arr[0].length;
    const d = [[1,0], [-1, 0], [0, 1], [0, -1]];
    const result = new Array(column).fill(null).map((v)=>new Array(row).fill(false));
    
    const queue = [];
    for(let i = 0; i < column; i++) {
        result[i][0] = true;
        queue.push([i, 0]);
        
        result[i][row-1] = true;
        queue.push([i, row-1]);
    }
    for(let j = 0; j < row; j++) {
        result[0][j] = true;
        queue.push([0, j]);
        
        result[column-1][j] = true;
        queue.push([column-1, j]);
    }
    
    while(queue.length > 0) {
        const [y, x] = queue.shift();
        for(let [dy, dx] of d) {
            const ny = y + dy, nx = x + dx;
            if(ny >= 0 && ny < column && nx >= 0 && nx < row) {
                if(result[ny][nx] === false && arr[y][x] === false) {
                    result[ny][nx] = true;
                    queue.push([ny, nx]);
                }
            }
        }
    }
    
    return result;
}

function solution(storage, requests) {
    var answer = 0;
    const column = storage.length;
    const row = storage[0].length;
    const arr = new Array(column).fill(null).map((v)=>new Array(row).fill(true));
    
    for(let request of requests) {
        if(request.length === 1) {
            const temp = getStatus(arr);
            for(let i = 0; i < column; i++) {
                for(let j = 0; j < row; j++) {
                    if(storage[i][j] === request[0] && temp[i][j] === true) arr[i][j] = false;
                }
            }
        }
        
        if(request.length === 2) {
            for(let i = 0; i < column; i++) {
                for(let j = 0; j < row; j++) {
                    if(storage[i][j] === request[0]) arr[i][j] = false;
                }
            }
        }
    }
    
    return arr.flat().filter((v)=>v).length;
}