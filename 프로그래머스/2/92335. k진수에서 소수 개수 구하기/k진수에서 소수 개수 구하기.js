function isPrime(num) {
    if (num === 1) return false;
    
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

function solution(n, k) {
    const str = n.toString(k);
    const arr = str.split("0").filter(Boolean);

    return arr.filter((v)=>isPrime(+v)).length;
   
}