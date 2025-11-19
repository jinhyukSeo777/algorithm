function solution(scores) {
    var answer = 0;
    const [score1, score2] = scores[0];
    
    scores.sort((a,b)=>{
        if(a[0] !== b[0]) return b[0]-a[0];
        else return a[1]-b[1];
    });
    
    let max = -1;
    for(let [s1, s2] of scores) {
        if(s1 > score1 && s2 > score2) return -1;
        if(s2 >= max && s1+s2 > score1+score2) answer++;
        max = Math.max(max, s2);
    }
    
    return answer+1;
}