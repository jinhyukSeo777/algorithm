function solution(n, lighthouse) {
    var answer = 0;
    const map  = new Map();
    const set = new Set();
    
    for(let [start, end] of lighthouse) {
        if(!map.has(start)) map.set(start, []);
        if(!map.has(end)) map.set(end, []);
        map.get(start).push(end);
        map.get(end).push(start);
    }
    
    while(set.size < n) {
        for(let i = 1; i <= n; i++) {
            if(set.has(i)) continue;
            
            const near = map.get(i).filter((v)=>!set.has(v));
            
            if(near.length === 0) {
                set.add(i);
            }
            
            if(near.length === 1) {
                set.add(i);
                set.add(near[0]);
                answer++;
            }
        }
    }
    
    return answer;
}