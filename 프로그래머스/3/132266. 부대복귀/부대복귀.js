function solution(n, roads, sources, destination) {
    const map = new Map();
    
    for(let [from, to] of roads) {
        if(!map.get(from)) map.set(from, []);
        if(!map.get(to)) map.set(to, []);
        map.get(from).push(to);
        map.get(to).push(from);
    }
    
    const queue = [];
    const arr = new Array(n+1).fill(-1);
    
    queue.push(destination)
    arr[destination] = 0;
    
    while(queue.length > 0) {
        const current = queue.shift();
        for(let next of map.get(current)) {
            if(arr[next] === -1) {
                queue.push(next);
                arr[next] = arr[current]+1;
            } 
        }
    }
    
    return sources.map((v)=>arr[v]);
}