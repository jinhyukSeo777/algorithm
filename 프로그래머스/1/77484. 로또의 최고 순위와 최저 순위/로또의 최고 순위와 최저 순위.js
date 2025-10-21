function solution(lottos, win_nums) {
    var answer = 0;
    const zero = lottos.filter((v)=>v===0).length;
    lottos = lottos.filter((v)=>v!==0);
    
    lottos.sort((a,b)=>a-b);
    win_nums.sort((a,b)=>a-b);
    
    let i = 0, j = 0;
    while(i < lottos.length) {
        while(lottos[i] >= win_nums[j]) j++;
        if(win_nums[j-1] === lottos[i]) answer++;
        i++;
    }
    
    return [Math.min(7-answer-zero, 6), Math.min(7-answer, 6)]
}