function solution(n, times) {
    let min = 1, max = 1000000000000000000;
    let answer = 0;
    
    while(min <= max) {
        const mid = Math.floor((min+max)/2);
        const possible = times.reduce((acc,cur)=>acc+Math.floor((mid/cur)),0);
        
        if(possible >= n) {
            answer = mid
            max = mid-1;
        } else {
            min = mid+1;
        }
    }
    
    return answer;
}