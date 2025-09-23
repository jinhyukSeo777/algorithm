function solution(food_times, k) {
    const total = food_times.reduce((acc, cur) => acc + cur, 0);
    const arr = food_times.map((t, i) => [t, i]);
    arr.sort((a, b) => a[0] - b[0]);
    
    if (total <= k) return -1;
    if(food_times.length > k) return k+1;

    let prev = 0;
    
    for(let i = 0; i < arr.length; i++) {
        const cur = arr[i][0];
        const diff = cur - prev;
        const remain = arr.length - i;
        const cost = diff * remain;
        
        if(cost > k) {
            const step = Math.floor(k / remain);
            const rest = k % remain;
            const min = prev + step;

            const temp = arr.filter((v)=>v[0] > min);
            temp.sort((a,b)=>a[1]-b[1]);
            
            return temp[rest][1] + 1;
        }
        
        k-=cost;
        prev = cur;
    }
}
