function solution(diffs, times, limit) {
    let answer = 0;
    let min = 1, max = 100000;
    
    while(min <= max) {
        let mid = Math.floor((min+max)/2);
        let sum = 0;
        
        diffs.forEach((v,i)=>{
            if(mid >= v) sum = sum + times[i];
            else sum = sum + (v-mid)*(times[i]+times[i-1]) + times[i];
        })
        
        if(sum <= limit) {
            answer = mid;
            max = mid-1;
        } else {
            min = mid+1;
        }
    }
    
    return answer;
}