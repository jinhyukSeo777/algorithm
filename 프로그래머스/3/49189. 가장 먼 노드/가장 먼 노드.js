function solution(n, edge) {
    const map = new Map();
    
    for(let [from, to] of edge) {
        if(!map.has(from)) map.set(from, []);
        if(!map.has(to)) map.set(to, []);
        map.get(from).push(to);
        map.get(to).push(from);
    }
 
    const arr = new Array(n+1).fill(Infinity);
    const queue = [];
    queue.push(1);
    arr[1] = 0;
    
    while(queue.length > 0) {
        const item = queue.shift();
        for(let next of map.get(item) || []) {
            if(arr[next] > arr[item] + 1) {
                arr[next] = arr[item]+1;
                queue.push(next);
            }
        }
    }
    
    const max = Math.max(...arr.slice(1));
    return arr.filter((v)=>v===max).length;
}