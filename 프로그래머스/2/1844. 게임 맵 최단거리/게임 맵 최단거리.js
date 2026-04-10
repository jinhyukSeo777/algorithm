function solution(maps) {
    const arr = new Array(maps.length).fill(null).map((v)=>new Array(maps[0].length).fill(Infinity));
    const d = [[-1,0],[1,0],[0,-1],[0,1]];
    
    function bfs() {
        const queue = [];
        queue.push([0, 0]);
        arr[0][0] = 1;
    
        let head = 0;
        while(head < queue.length) {
            const [y, x] = queue[head++];
            for(let [dy, dx] of d) {
                const ny = y+dy, nx = x+dx;
                if(ny >= 0 && ny < maps.length && nx >= 0 && nx < maps[0].length) {
                    if(maps[ny][nx] === 1 && arr[ny][nx] === Infinity) {
                        arr[ny][nx] = arr[y][x]+1;
                        queue.push([ny,nx]);
                    }
                }
            }
        }
    }
    
    bfs();
    
    return arr[maps.length-1][maps[0].length-1] === Infinity ? -1 : arr[maps.length-1][maps[0].length-1];
}