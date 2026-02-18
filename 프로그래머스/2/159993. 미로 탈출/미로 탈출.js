function getDistance(start, end, maps) {
    const d = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const arr = new Array(maps.length).fill(null).map((v)=>new Array(maps[0].length).fill(-1));
    
    const queue = [];
    arr[start[0]][start[1]] = 0;
    queue.push(start);
    
    while(queue.length > 0) {
        const [y, x] = queue.shift();
        for(let [dy, dx] of d) {
            const ny = y+dy, nx = x+dx;
            if(ny >= 0 && ny < maps.length && nx >= 0 && nx < maps[0].length) {
                if(maps[ny][nx] !== "X" && arr[ny][nx] === -1) {
                    arr[ny][nx] = arr[y][x]+1;
                    queue.push([ny, nx]);
                }
            }
        }
    }
    
    return arr[end[0]][end[1]];
}

function solution(maps) {
    var answer = 0;
    let S;
    let L;
    let E;
    
    for(let i = 0; i < maps.length; i++) {
        for(let j = 0; j < maps[0].length; j++) {
            if(maps[i][j] === "S") S = [i, j];
            if(maps[i][j] === "L") L = [i, j];
            if(maps[i][j] === "E") E = [i, j];
        }
    }
    
    const SToL = getDistance(S, L, maps);
    const LToE = getDistance(L, E, maps);
    
    return SToL === -1 || LToE === -1 ? -1 : SToL + LToE;
}