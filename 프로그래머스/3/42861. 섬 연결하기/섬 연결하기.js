function solution(n, costs) {
    let answer = 0;
    const map = new Map();
    const set = new Set();

    for (const [from, to, cost] of costs) {
        if (!map.has(from)) map.set(from, []);
        if (!map.has(to)) map.set(to, []);
        map.get(from).push([to, cost]);
        map.get(to).push([from, cost]);
    }
    
    const queue = [];
    queue.push([0, 0]);

    while(set.size < n) {
        queue.sort((a, b) => a[1] - b[1]);
        const [node, cost] = queue.shift();
        
        if(set.has(node)) continue;
        answer+=cost;
        set.add(node);

        for(let [nextNode, nextCost] of map.get(node)) {
            if(!set.has(nextNode)) {
                queue.push([nextNode, nextCost]);
            }
        }
    }

    return answer;
}
