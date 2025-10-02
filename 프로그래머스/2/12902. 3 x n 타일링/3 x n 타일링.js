function solution(n) {
    const arr = new Array(n+1).fill(0);
    
    arr[0] = 1;
    arr[2] = 3;
    
    for(let i = 4; i <= n; i+=2) {
        arr[i] = (arr[i-2]*4)%1000000007 - arr[i-4];
        if(arr[i] < 0) arr[i]+=1000000007;
    }
    
    return arr[n];
}