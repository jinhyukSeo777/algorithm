function go(newWire) {
    const map = new Map()
    
    for(let [from, to] of newWire) {
        if(!map.has(from)) map.set(from, [])
        if(!map.has(to)) map.set(to, [])
        map.get(from).push(to)
        map.get(to).push(from)
    }
    
    const queue = []
    const set = new Set()
    queue.push(1)
    set.add(1)
    
    while(queue.length > 0) {
        const item = queue.shift()
        for(let next of map.get(item) || []) {
            if(!set.has(next)) {
                queue.push(next)
                set.add(next)
            }
        }
    }
    
    return set.size;
}

function solution(n, wires) {
    var answer = Infinity;
    
    for(let wire of wires) {
        const newWire = wires.filter((v)=>v!==wire)
        const len = go(newWire)
        answer = Math.min(answer, Math.abs((n-len)-len))
    }
    
    return answer;
}