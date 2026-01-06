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
            location = (location-1+priorities.length)%priorities.length;
        }
    } 
    
    return answer;
}