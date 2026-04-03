function canSuccess(mid, distance, rocks, n) {
    let count = 0;
    let prev = 0;
    
    for(let i = 0; i < rocks.length; i++) {
        if(rocks[i] - prev < mid) {
            count++;
        } else {
            prev = rocks[i];
        }
    }
    
    if(distance - prev < mid) count++;
    
    return count <= n;
}

function solution(distance, rocks, n) {
    var answer = 0;
    let min = 1, max = 10000000000;
    rocks.sort((a,b)=>a-b);
    
    while(min <= max) {
        const mid = Math.floor((min+max)/2);
        
        const success = canSuccess(mid, distance, rocks, n);
        
        if(success) {
            answer = mid;
            min = mid+1;
        } else {
            max = mid-1;
        }
    }
    
    return answer;
}