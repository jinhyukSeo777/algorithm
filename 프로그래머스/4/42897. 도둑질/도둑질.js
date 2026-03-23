function solution(money) {
    const len = money.length;
    
    const dp1 = new Array(len);
    dp1[0] = money[0];
    dp1[1] = money[0];
    for(let n = 2; n < len-1; n++) {
        dp1[n] = Math.max(dp1[n-1], dp1[n-2] + money[n]);
    }
    
    const dp2 = new Array(len);
    dp2[0] = 0;
    dp2[1] = money[1];
    for(let n = 2; n < len; n++) {
        dp2[n] = Math.max(dp2[n-1], dp2[n-2] + money[n]);
    }
    
    return Math.max(dp1[len-2], dp2[len-1]);
}