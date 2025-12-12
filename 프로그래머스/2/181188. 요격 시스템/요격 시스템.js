function solution(targets) {
    var answer = -1;
    let lastEnd = -1;
    targets.sort((a,b)=>{
        if(a[0] !== b[0]) return a[0]-b[0];
        else return a[1]-b[1];
    });
    
    for(let [start, end] of targets) {
       if(start >= lastEnd) {
            answer++;
            lastEnd = end;
        } else {
            lastEnd = Math.min(lastEnd, end);
        }
    }
    
    return answer+1;
}