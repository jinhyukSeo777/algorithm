function solution(n, computers) {
    var answer = 0;
    const set = new Set();
    
    function bfs(i) {
        const queue = [];
        queue.push(i);
        set.add(i);
        
        let head = 0;
        while(head < queue.length) {
            const item = queue[head++];
            for(let i = 0; i < n; i++) {
                if(computers[item][i] === 1 && !set.has(i) && item !== i) {
                    queue.push(i);
                    set.add(i);
                }
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(set.has(i)) continue;
        bfs(i);
        answer++;
    }
    
    return answer;
}