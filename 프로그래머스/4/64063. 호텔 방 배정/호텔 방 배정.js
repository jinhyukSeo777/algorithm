function solution(k, room_number) {
    var answer = [];
    const map = new Map();
    
    for(let n of room_number) {
        let temp = n;
        const path = [];
        
        while(map.has(temp)) {
            path.push(temp);
            temp = map.get(temp);
        }
        
        for(let p of path) map.set(p, temp+1);
        map.set(temp, temp+1);
        
        answer.push(temp);
    }
    
    return answer;
}