function solution(distance, rocks, n) {
    var answer = 0;
    let min = 1, max = distance;
    rocks.sort((a,b)=>a-b);
    
    function canSuccess(mid) {
        let removed = 0;
        let prev = 0;
        
        for(let i = 0; i < rocks.length; i++) {
            if(rocks[i] - prev < mid) {
                removed++; 
            } else {
                prev = rocks[i];
            }
        }
        
        if (distance - prev < mid) removed++;
        
        return removed <= n;
    }
    
    while(min <= max) {
        const mid = Math.floor((min+max)/2);
        
        const success = canSuccess(mid);
        
        if(success) {
            answer = mid;
            min = mid+1;
        } else {
            max = mid-1;
        }
    }
    
    return answer;
}