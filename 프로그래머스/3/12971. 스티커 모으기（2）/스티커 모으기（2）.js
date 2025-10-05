function solution(sticker) {
    var answer = 0;
    
    if(sticker.length <= 2) return Math.max(...sticker);
    
    const dp1 = [];
    dp1[0] = sticker[0];
    dp1[1] = sticker[0];
    for(let i = 2; i < sticker.length-1; i++) {
        dp1[i] = Math.max(dp1[i-2]+sticker[i], dp1[i-1]);
        answer = Math.max(answer, dp1[i]);
    }
    
    const dp2 = [];
    dp2[0] = 0;
    dp2[1] = sticker[1];
    for(let i = 2; i < sticker.length; i++) {
        dp2[i] = Math.max(dp2[i-2]+sticker[i], dp2[i-1]);
        answer = Math.max(answer, dp2[i]);
    }
    
    return answer;
}