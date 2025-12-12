function solution(info, edges) {
    var answer = 0;
    const map = new Map();
    
    for(let [from, to] of edges) {
        if(!map.has(from)) map.set(from, []);
        map.get(from).push(to);
    }
    
    function dfs(current, possible, sheep, wolf) {
        info[current] === 0 ? sheep++ : wolf++;
        
        if(wolf >= sheep) return;
        answer = Math.max(answer, sheep);
        
        const newPossible = [...possible, ...(map.get(current) || [])];
        newPossible.splice(newPossible.indexOf(current), 1);
        
        for(let next of newPossible) {
            dfs(next, newPossible, sheep, wolf);
        }
    }
    
    dfs(0, [0], 0, 0);
    
    return answer;
}