function isPrime(num) {
    if (num <= 1) return false;
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    
    return true;
}

function solution(numbers) {
    const set = new Set();
    const s = new Set();
    
    function dfs(str) {
        if(set.has(+str)) return;
        set.add(+str);
        
        for(let i = 0; i < numbers.length; i++) {
            if(s.has(i)) continue;
            s.add(i);
            dfs(str+numbers[i]);
            s.delete(i);
        }
    }
    
    dfs("");
    
    return [...set].filter(isPrime).length;
}