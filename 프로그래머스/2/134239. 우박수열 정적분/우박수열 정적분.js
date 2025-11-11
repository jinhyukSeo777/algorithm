function solution(k, ranges) {
    var answer = [];
    const arr = [];
    
    while(k !== 1) {
        arr.push(k);
        if(k % 2 === 0) k = k/2;
        else k = k*3+1;
    }
    arr.push(1);
    
    for(let [start, end] of ranges) {
        if(end <= 0) end = arr.length - 1 + end;
        if(start > end) {
            answer.push(-1);
            continue;
        }
        
        let sum = 0;
        for(let i = start; i < end; i++) {
            sum+=(arr[i]+arr[i+1])/2;
        }
        
        answer.push(sum);
    }
    
    return answer;
}