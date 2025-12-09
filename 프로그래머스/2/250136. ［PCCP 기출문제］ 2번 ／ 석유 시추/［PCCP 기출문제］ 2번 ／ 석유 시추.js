function solution(land) {
    var answer = 0;
    let number = 2;
    const map = new Map();
    const d = [[-1,0],[1,0],[0,-1],[0,1]];
    
    function bfs(y, x) {
        let total = 0;
        
        const queue = [];
        queue.push([y, x]);
        land[y][x] = number;
        total++;
        
        while(queue.length > 0) {
            const [y, x] = queue.shift();
            for(let [dy, dx] of d) {
                const ny = y+dy, nx = x+dx;
                if(ny >= 0 && ny < land.length && nx >= 0 && nx < land[0].length) {
                    if(land[ny][nx] === 1) {
                        queue.push([ny, nx]);
                        land[ny][nx] = number;
                        total++;
                    }
                }
            }
        }
        
        return total;
    }
    
    for(let i = 0; i < land.length; i++) {
        for(let j = 0; j < land[0].length; j++) {
            if(land[i][j] === 1) {
                const total = bfs(i, j);
                map.set(number, total);
                number++;
            }
        }
    }
    
    for(let j = 0; j < land[0].length; j++) {
        const set = new Set();
        let sum = 0;
        
        for(let i = 0; i < land.length; i++) {
            if(land[i][j] !== 0 && !set.has(land[i][j])) {
                sum+=map.get(land[i][j]);
                set.add(land[i][j]);
            }
        }
        
        answer = Math.max(answer, sum);
    }
    
    return answer;
}