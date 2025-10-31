function solution(maps) {
    var answer = [];
    const arr = new Array(200).fill(null).map((v)=>new Array(200).fill(false));
    const d = [[-1,0], [1,0], [0,-1], [0,1]];
    
    function bfs(i, j) {
        let sum = 0;
        
        const queue = []
        queue.push([i,j]);
        arr[i][j] = true;
        sum+=Number(maps[i][j]);
        
        while(queue.length > 0) {
            const [y, x] = queue.shift();
            for(let [dy, dx] of d) {
                const ny = y+dy, nx = x+dx;
                if(ny >= 0 && ny < maps.length && nx >= 0 && nx < maps[0].length) {
                    if(maps[ny][nx] !== "X" && arr[ny][nx] === false) {
                        queue.push([ny, nx]);
                        arr[ny][nx] = true;
                        sum+=Number(maps[ny][nx]);
                    }
                }
            }
        }
        
        return sum;
    }
    
    for(let i = 0; i < maps.length; i++) {
        for(let j = 0; j < maps[0].length; j++) {
            if(maps[i][j] === "X") continue;
            if(arr[i][j]) continue;
            answer.push(bfs(i, j));
        }
    }
    
    return answer.length === 0 ? [-1] : answer.sort((a,b)=>a-b);
}