function findDivisors(n) {
    const set = new Set();
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) { 
            set.add(i);
            set.add(n/i);
        }
    }
    return [...set].sort((a, b) => a - b);
}

function solution(arrayA, arrayB) {
    var answer = 0;
    
    const minA = arrayA.reduce((acc,cur)=>{
        if(cur < acc) return cur;
        else return acc;
    }, Infinity)
    const minB = arrayB.reduce((acc,cur)=>{
        if(cur < acc) return cur;
        else return acc;
    }, Infinity)
    
    let divisorA = findDivisors(minA);
    let divisorB = findDivisors(minB);
    
    for(let number of arrayA) {
        if(divisorA.length === 0) break;
        for(let divisor of divisorA) {
            if(number%divisor !== 0) divisorA = divisorA.filter((v)=>v!==divisor);
        }
    }
    
    for(let number of arrayB) {
        if(divisorA.length === 0) break;
        for(let divisor of divisorA) {
            if(number%divisor === 0) divisorA = divisorA.filter((v)=>v!==divisor);
        }
    }
    
    for(let number of arrayB) {
        if(divisorB.length === 0) break;
        for(let divisor of divisorB) {
            if(number%divisor !== 0) divisorB = divisorB.filter((v)=>v!==divisor);
        }
    }
    
    for(let number of arrayA) {
        if(divisorB.length === 0) break;
        for(let divisor of divisorB) {
            if(number%divisor === 0) divisorB = divisorB.filter((v)=>v!==divisor);
        }
    }
    
    return Math.max(...divisorA, ...divisorB, 0);
}