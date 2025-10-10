function solution(N, number) {
    const arr = new Array(10).fill(null).map((v)=>new Set());
    
    let n = N;
    for(let i = 1; i <= 8; i++) {
        arr[i].add(n);
        n = n * 10 + N;
    }
    
    for(let i = 1; i <= 8 ; i++) {
        for(let ii = 1; ii <= Math.floor(i/2); ii++) {
            for(let item1 of arr[ii]) {
                for(let item2 of arr[i-ii]) {
                    arr[i].add(item1+item2);
                    arr[i].add(item1-item2);
                    arr[i].add(item2-item1);
                    arr[i].add(item1*item2);
                    arr[i].add(Math.floor(item1/item2));
                    arr[i].add(Math.floor(item2/item1));
                }
            }
        }
        if(arr[i].has(number)) return i;
    }
    
    return -1;
}