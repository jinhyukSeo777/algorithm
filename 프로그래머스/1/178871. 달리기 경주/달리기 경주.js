function solution(players, callings) {
    const map = new Map();
    
    players.forEach((v,i)=>map.set(v, i));
    
    for(let calling of callings) {
        const index = map.get(calling);
        const temp = players[index-1];
        
        players[index-1] = calling;
        players[index] = temp;
        
        map.set(calling, index-1);
        map.set(temp, index);
    }
    
    return players;
}