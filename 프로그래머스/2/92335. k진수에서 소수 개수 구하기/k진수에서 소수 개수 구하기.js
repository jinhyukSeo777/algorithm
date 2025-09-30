function isPrime(num) {
    if (num === 0 || num === 1) return false;
    if (num === 2 || num === 3) return true;
    
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

function solution(n, k) {
    const str = n.toString(k);
    const arr = str.split("0");
    
    return arr.filter((v)=>isPrime(+v)).length;
   
}