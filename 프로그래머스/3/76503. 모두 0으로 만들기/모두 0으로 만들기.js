function solution(a, edges) {
    const sum = a.reduce((acc,cur)=>acc+cur, 0);
    if(sum !== 0) return -1;
    
    const allZero = a.every((v)=>v===0);
    if(allZero) return 0;
    
    const graph = new Array(a.length).fill(null).map((v)=>new Set());
    const arr = [];
    let answer = 0n;
    
    for(let [start, end] of edges) {
        graph[start].add(end);
        graph[end].add(start);
    }
    
    for(let i = 0; i < graph.length; i++) {
        if(graph[i].size === 1) arr.push(i);
    }
    
    while(arr.length > 1) {
        const current = arr.pop();
        const next = [...graph[current]][0];
        
        a[next]+=a[current];
        answer+=BigInt(Math.abs(a[current]));
        
        graph[next].delete(current);
        
        if(graph[next].size === 1) arr.push(next);
    }
    
    return answer;
}