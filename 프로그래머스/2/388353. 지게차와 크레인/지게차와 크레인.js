function getStatus(arr) {
    const height = arr.length;
    const width = arr[0].length;
    const d = [[1,0], [-1, 0], [0, 1], [0, -1]];
    const result = new Array(height).fill(null).map((v)=>new Array(width).fill(false));
    
    const queue = [];
    for(let i = 0; i < height; i++) {
        result[i][0] = true;
        queue.push([i, 0]);
        
        result[i][width-1] = true;
        queue.push([i, width-1]);
    }
    for(let j = 0; j < width; j++) {
        result[0][j] = true;
        queue.push([0, j]);
        
        result[height-1][j] = true;
        queue.push([height-1, j]);
    }
    
    while(queue.length > 0) {
        const [y, x] = queue.shift();
        for(let [dy, dx] of d) {
            const ny = y + dy, nx = x + dx;
            if(ny >= 0 && ny < height && nx >= 0 && nx < width) {
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
    const height = storage.length;
    const width = storage[0].length;
    const arr = new Array(height).fill(null).map((v)=>new Array(width).fill(true));
    
    for(let request of requests) {
        if(request.length === 2) {
            for(let i = 0; i < height; i++) {
                for(let j = 0; j < width; j++) {
                    if(storage[i][j] === request[0]) arr[i][j] = false;
                }
            }
        }
        
        if(request.length === 1) {
            const temp = getStatus(arr);
            for(let i = 0; i < height; i++) {
                for(let j = 0; j < width; j++) {
                    if(storage[i][j] === request[0] && temp[i][j] === true) arr[i][j] = false;
                }
            }
        }
    }
    
    return arr.flat().filter(v=>v).length;
}