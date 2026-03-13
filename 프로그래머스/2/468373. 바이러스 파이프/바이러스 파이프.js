function solution(n, infection, edges, k) {
    let answer = 0;
    let set = new Set([infection]);
    const map = new Map();
    
    for(let [x, y, type] of edges) {
        if(!map.has(x)) map.set(x, []);
        if(!map.has(y)) map.set(y, []);
        map.get(x).push([y, type]);
        map.get(y).push([x, type]);
    }
    
    function dfs(round, prev) {
        if(round === k) {
            answer = Math.max(answer, set.size);
            return;
        }
        
        for(let type = 1; type <= 3; type++) {
            if(type === prev) continue;
            
            const temp = [...set];
            
            for(let s of set) {
                for(let [n, t] of map.get(s)) {
                    if(t !== type) continue;
                    set.add(n);
                }
            }
            
            dfs(round+1, type);
            
            set = new Set(temp);
        }
    }
    
    dfs(0, -1);
    
    return answer;
}