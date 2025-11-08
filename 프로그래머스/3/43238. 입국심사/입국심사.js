function solution(n, times) {
    var answer = 0;
    let min = 1, max = 1000000000000000000;
    
    while(min <= max) {
        const mid = Math.floor((min+max)/2);
        const pass = times.reduce((acc,cur)=>acc+Math.floor((mid/cur)), 0);
        
        if(pass >= n) {
            answer = mid;
            max = mid-1;
        } else {
            min = mid+1;
        }
    }
    
    return answer;
}