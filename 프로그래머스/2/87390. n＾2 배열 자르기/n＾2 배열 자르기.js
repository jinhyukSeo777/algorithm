function solution(n, left, right) {
    var answer = [];
    
    for(let i = left; i <= right; i++) {
        const row = Math.floor(i/n);
        const colum = i%n;
        answer.push(Math.max(row, colum)+1);
    }
    
    return answer;
}