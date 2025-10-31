function getLimit(n) {
    const hour = Math.floor(n / 100);
    const min = n % 100;
    
    if(min < 50) return n + 10;
    
    return (hour+1) * 100 + (min - 50);
}

function solution(schedules, timelogs, startday) {
    var answer = 0;
    const free = startday === 7 ? [0, 6] : [6-startday, 6-startday+1];
    const set = new Set();
    
    for(let i = 0; i < timelogs.length; i++) {
        let success = true;
        
        for(let j = 0; j < 7; j++) {
            if(free.includes(j)) continue;
            if(timelogs[i][j] > getLimit(schedules[i])) success = false;
        }
        
        if(success) answer++;
    }
    
    return answer;
}