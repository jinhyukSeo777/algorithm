function solution(lottos, win_nums) {
    const zero = lottos.filter(v => v===0).length;
    const correct = lottos.reduce((acc,cur) => {
        if(win_nums.includes(cur)) return acc+1;
        return acc;
    }, 0);
    
    return [Math.min(7-correct-zero, 6), Math.min(7-correct, 6)]
}