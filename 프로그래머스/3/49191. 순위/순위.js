function solution(n, results) {
    var answer = 0;
    const up = new Map();
    const down = new Map();
    
    for(let [win, lose] of results) {
        if(!up.has(lose)) up.set(lose, []);
        if(!down.has(win)) down.set(win, []);
        up.get(lose).push(win);
        down.get(win).push(lose);
    }
    
    for(let i = 1; i <= n; i++) {
        const set = new Set();
        const queue = [];
        queue.push(i);
        
        while(queue.length > 0) {
            const item = queue.shift();
            for(let u of up.get(item) || []) {
                if(!set.has(u)) {
                    set.add(u);
                    queue.push(u);
                }
            }
        }

        queue.push(i);
        
        while(queue.length > 0) {
            const item = queue.shift();
            for(let d of down.get(item) || []) {
                if(!set.has(d)) {
                    set.add(d);
                    queue.push(d);
                }
            }
        }
        
        if(set.size === n-1) answer++;
    }
    
    return answer;
}