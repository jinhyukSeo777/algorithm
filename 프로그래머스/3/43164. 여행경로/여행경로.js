function solution(tickets) {
    var answer = [];
    const map = new Map();
    const seq = ["ICN"];
    
    for(let [from, to] of tickets) {
        if(!map.has(from)) map.set(from, []);
        map.get(from).push(to);
    }
    
    function dfs(current) {
        if(seq.length === tickets.length + 1) {
            if(answer.length === 0) answer = [...seq];
            if(seq.join("") < answer.join("")) answer = [...seq];
            return;
        }
        
        for(let next of map.get(current) || []) {
            const index = map.get(current).indexOf(next);
            
            map.get(current).splice(index, 1);
            seq.push(next);
            
            dfs(next);
            
            map.get(current).splice(index, 0, next);
            seq.pop();
        }
    }
    
    dfs("ICN");
    
    return answer;
}