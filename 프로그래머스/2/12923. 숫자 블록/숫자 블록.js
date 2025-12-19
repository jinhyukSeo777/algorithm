function largestDivisor(n) {
    if(n === 1) return 0;
    
    let answer = 1;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n%i === 0 && n/i <= 10000000) return n/i;
        if(n%i === 0) answer = i;
    }

    return answer;
}

function solution(begin, end) {
    var answer = [];
    
    for(let i = begin; i <= end; i++) {
        answer.push(largestDivisor(i));
    }
    
    return answer;
}