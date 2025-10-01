function solution(arr) {
    var answer = [0, 0];
    
    function go(start, len) {
        const [y, x] = start;
        let zero = 0, one = 0;
        
        for(let i = y; i < y+len; i++) {
            for(let j = x; j < x+len; j++) {
                if(arr[i][j] === 0) zero++;
                if(arr[i][j] === 1) one++;
            }
        }
        
        if(one === 0) {
            answer[0]++;
            return;
        }
        if(zero === 0) {
            answer[1]++;
            return;
        }
        
        go([y, x], len/2);
        go([y, x+len/2], len/2);
        go([y+len/2, x], len/2);
        go([y+len/2, x+len/2], len/2);
    }
    
    go([0,0], arr.length);
    
    return answer;
}