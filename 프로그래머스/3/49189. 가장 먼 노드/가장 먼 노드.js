function solution(n, edge) {
    var answer = 0;
    const map = new Map();
    
    for(let [from, to] of edge) {
        if(!map.has(from)) map.set(from, []);
        if(!map.has(to)) map.set(to, []);
        map.get(from).push(to);
        map.get(to).push(from);
    }
 
    const arr = new Array(n+1).fill(-1);
    const queue = [];
    queue.push(1);
    arr[1] = 0;
    
    while(queue.length > 0) {
        const item = queue.shift();
        for(let node of map.get(item) || []) {
            if(arr[node] === -1) {
                queue.push(node);
                arr[node] = arr[item]+1;
            }
        }
    }
    
    const max = Math.max(...arr);
    return arr.filter((v)=>v===max).length;
}