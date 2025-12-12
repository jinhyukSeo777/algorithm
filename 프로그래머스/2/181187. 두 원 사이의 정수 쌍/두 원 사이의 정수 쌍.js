function solution(r1, r2) {
    var answer = 0;
    
    for(let x = 1; x <= r1; x++) {
        const y2 = Math.floor(Math.sqrt(r2*r2-x*x));
        const y1 = Math.ceil(Math.sqrt(r1*r1-x*x));
        answer+=(y2-y1+1);
    }
    
    for(let x = r1+1; x <= r2; x++) {
        const y = Math.floor(Math.sqrt(r2*r2-x*x));
        answer+=(y+1);
    }
    
    return answer*4;
}