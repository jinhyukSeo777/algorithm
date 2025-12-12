function solution(n, s, a, b, fares) {
    const map = new Map();
    
    for(let [a, b, cost] of fares) {
        if(!map.has(a)) map.set(a, []);
        if(!map.has(b)) map.set(b, []);
        map.get(a).push([b, cost]);
        map.get(b).push([a, cost]);
    }
    
    function dijkstra(start) {
        const arr = new Array(n+1).fill(Infinity);
        
        const queue = [];
        queue.push(start);
        arr[start] = 0;
        
        while(queue.length > 0) {
            const current = queue.shift();
            for(let [next, cost] of map.get(current) || []) {
                if(arr[current]+cost < arr[next]) {
                    queue.push(next);
                    arr[next] = arr[current]+cost;
                }
            }
        }
        
        return arr;
    }
    
    const dijkA = dijkstra(a);
    const dijkB = dijkstra(b);
    const dijkS = dijkstra(s);
    
    let min = Infinity;
    for(let i = 1; i <= n; i++) {
        min = Math.min(min, dijkA[i]+dijkB[i]+dijkS[i]);
    }
    
    return min;
}