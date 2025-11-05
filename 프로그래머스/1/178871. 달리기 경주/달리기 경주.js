function solution(players, callings) {
    const map = new Map();
    const rmap = new Map();
    
    for(let i = 0; i < players.length; i++) {
        map.set(players[i], i);
        rmap.set(i, players[i]);
    }
    
    for(let calling of callings) {
        const index = map.get(calling);
        const front = rmap.get(index-1);
        
        map.set(calling, index-1);
        map.set(front, index);
        
        rmap.set(index-1, calling);
        rmap.set(index, front);
    }
    
    return [...map].sort((a,b)=>a[1]-b[1]).map((v)=>v[0]);
}