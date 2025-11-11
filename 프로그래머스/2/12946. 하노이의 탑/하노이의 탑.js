function solution(n) {
    var answer = [];
    
    function hanoi(n, start, end, aux) {
        if(n === 1) {
            answer.push([start, end]);
            return;
        }
        
        hanoi(n-1, start, aux, end);
        hanoi(1, start, end, aux);
        
        hanoi(n-1, aux, end, start);
    }
    
    hanoi(n, 1, 3, 2);
    
    return answer;
}