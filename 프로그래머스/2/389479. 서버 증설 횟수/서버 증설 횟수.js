function solution(players, m, k) {
    var answer = 0;
    const queue = [];
    
    for(let i = 0; i < 24; i++) {
        while(queue[0] <= i) queue.shift();
        
        const player = players[i];
        if(m > player || (queue.length + 1) * m > player) continue;
        
        while((queue.length + 1) * m <= player) {
            queue.push(i+k);
            answer++;
        }
    }
    
    return answer;
}