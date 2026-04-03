function solution(n, paths, gates, summits) {
    var answer = [Infinity, Infinity];
    const arr = new Array(n+1).fill(Infinity);
    const map = new Map();
    const summitsSet = new Set(summits);
    
    for(let [from, to, cost] of paths) {
        if(!map.has(from)) map.set(from, []);
        if(!map.has(to)) map.set(to, []);
        map.get(from).push([to, cost]);
        map.get(to).push([from, cost])
    }
    
    const queue = [];
    for(let gate of gates) {
        queue.push(gate);
        arr[gate] = 0;
    }
    
    while(queue.length > 0) {
        const item = queue.shift();
        for(let [next, cost] of map.get(item) || []) {
            if(arr[next] > Math.max(cost, arr[item]) &&
               !summitsSet.has(item)
              ) {
                queue.push(next);
                arr[next] = Math.max(cost, arr[item]);
            }
        }
    }
    
    for(let summit of summits) {
        if(arr[summit] < answer[1]) answer = [summit, arr[summit]];
        else if(arr[summit] === answer[1] && summit < answer[0]) answer = [summit, arr[summit]];
    }
    
    return answer;
}