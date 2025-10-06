function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    
    while(deliveries.at(-1) === 0) deliveries.pop();
    
    while(pickups.at(-1) === 0) pickups.pop();
    
    while(deliveries.length > 0 || pickups.length > 0) {
        const max = Math.max(deliveries.length, pickups.length);
        answer+=2*max;
        
        let temp = cap;
        while(temp > 0 && deliveries.length > 0) {
            const last = deliveries.at(-1);
            if(last > temp) {
                deliveries[deliveries.length-1]-=temp;
                temp = 0;
            } else {
                temp -= last;
                deliveries.pop();
                while(deliveries.at(-1) === 0) deliveries.pop();
            }
            
        }
        
        temp = cap;
        while(temp > 0 && pickups.length > 0) {
            const last = pickups.at(-1);
            if(last > temp) {
                pickups[pickups.length-1]-=temp;
                temp = 0;
            } else {
                temp -= last;
                pickups.pop();
                while(pickups.at(-1) === 0) pickups.pop();
            }
        }
    }
    
    return answer;
}