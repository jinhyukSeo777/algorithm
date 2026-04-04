function solution(priorities, location) {
    var answer = 1;
    
    while(true) {
        const front = priorities.shift();
        
        if(priorities.every(v => front >= v)) {
            if(location === 0) break;
            answer++;
            location--;
        } else {
            priorities.push(front);
            location = location === 0 ? priorities.length-1 : location-1;
        }
    } 
    
    return answer;
}