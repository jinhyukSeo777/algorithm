function solution(a, b, g, s, w, t) {
    var answer = -1;
    const len = g.length;
    let min = 1, max = 100000000000000000;
    
    function canSuccess(mid) {
        let sum_g = 0;
        let sum_s = 0;
        let sum_b = 0;
        
        for(let i = 0; i < len; i++) {
            const time = Math.floor(Math.floor(mid/t[i])/2) + Math.floor(mid/t[i])%2;
            
            const amount_g = Math.min(time*w[i], g[i]);
            const amount_s = Math.min(time*w[i], s[i]);
            const amount_b = Math.min(time*w[i], g[i]+s[i]);
            
            sum_g+=amount_g;
            sum_s+=amount_s;
            sum_b+=amount_b;
        }
        
        if(sum_g >= a && sum_s >= b && sum_b >= a+b) return true;
        return false;
    }
    
    while(min <= max) {
        const mid = Math.floor((min+max)/2);
        const success = canSuccess(mid);
        
        if(success) {
            answer = mid;
            max = mid-1;
        } else {
            min = mid+1;
        }
    }
    
    return answer;
}