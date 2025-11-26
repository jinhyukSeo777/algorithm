function solution(n, q, ans) {
    var answer = 0;
    
    function check(a,b,c,d,e) {
        for(let i = 0; i < q.length; i++) {
            const arr = q[i];
            let sum = 0;
            if(arr.includes(a)) sum++;
            if(arr.includes(b)) sum++;
            if(arr.includes(c)) sum++;
            if(arr.includes(d)) sum++;
            if(arr.includes(e)) sum++;
            if(sum != ans[i]) return false;
        }
        
        return true;
    }
    
    for(let a = 1; a <= n-4; a++) {
        for(let b = a+1; b <= n-3; b++) {
            for(let c = b+1; c <= n-2; c++) {
                for(let d = c+1; d <= n-1; d++) {
                    for(let e = d+1; e <= n; e++) {
                        if(check(a,b,c,d,e)) answer++;
                    }
                }
            }
        }
    }
    
    return answer;
}