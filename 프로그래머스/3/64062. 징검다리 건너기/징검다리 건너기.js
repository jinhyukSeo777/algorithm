function solution(stones, k) {
    var answer = 0;
    let min = 1, max = 200000000;
    
    while(min < max) {
        const mid = Math.floor((min+max)/2);
        
        let count = 0;
        let success = true;
        for(let stone of stones) {
            if(stone >= mid) count = 0;
            else count++;
            if(count === k) success = false; 
        }
        
        if(success) {
            min = mid+1;
        } else {
            max = mid;
        }
    }
    
    return min-1;
}