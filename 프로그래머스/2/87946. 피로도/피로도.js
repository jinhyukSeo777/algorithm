function solution(k, dungeons) {
    var answer = 0;
    const set = new Set();
    
    function dfs(hp, count) {
        answer = Math.max(answer, count);
        for(let i = 0; i < dungeons.length; i++) {
            if(set.has(i)) continue;
            if(hp < dungeons[i][0]) continue;
            set.add(i);
            dfs(hp-dungeons[i][1], count+1);
            set.delete(i);
        }
    }
    
    dfs(k, 0);
    
    return answer;
}