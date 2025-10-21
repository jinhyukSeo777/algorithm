function solution(x, y, n) {
    const arr = new Array(10000001).fill(Infinity);
    
    arr[x] = 0;
    for(let i = x+1; i <= y; i++) {
        let min = arr[i-n] === undefined ? Infinity : arr[i-n];
        if(i%2 === 0) min = Math.min(min, arr[i/2]);
        if(i%3 === 0) min = Math.min(min, arr[i/3]);
        arr[i] = min + 1;
    }
    
    return arr[y] === Infinity ? -1 : arr[y];
}