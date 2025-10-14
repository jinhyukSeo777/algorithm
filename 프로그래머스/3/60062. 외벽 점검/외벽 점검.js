function solution(n, weak, dist) {
    let answer = Infinity;
    const weak2 = weak.concat(weak.map((v)=>v+n));
    const arr = new Array(dist.length).fill(true);
    
    function dfs(current, end, person) {
        if(current >= end) {
            answer = Math.min(answer, person);
            return;
        }
        
        let nextWeak;
        for(let w of weak2) {
            if(current < w) {
                nextWeak = w;
                break;
            }
        }
        
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === false) continue;
            arr[i] = false;
            dfs(nextWeak+dist[i], end, person+1);
            arr[i] = true;
        }
    }
    
    for(let i = 0; i < weak.length; i++) {
        dfs(weak2[i]-1, weak2[i+weak.length-1], 0);
    }
    
    return answer === Infinity ? -1 : answer;
}