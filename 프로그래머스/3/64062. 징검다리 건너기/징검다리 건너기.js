function canSuccess(mid, stones, k) {
    let count = 0;
    
    for(let stone of stones) {
        if(stone >= mid) {
            count = 0;
        } else {
            count++;
        }
        
        if(count === k) return false; 
    }
    
    return true;
}

function solution(stones, k) {
    var answer = 0;
    let min = 1, max = 200000000;
    
    while(min <= max) {
        const mid = Math.floor((min+max)/2);
        
        const success = canSuccess(mid, stones, k);
        
        if(success) {
            answer = mid;
            min = mid+1;
        } else {
            max = mid-1;
        }
    }
    
    return answer;
}