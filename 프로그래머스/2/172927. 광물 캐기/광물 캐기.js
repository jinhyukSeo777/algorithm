function solution(picks, minerals) {
    var answer = Infinity;
    const tired = [[1, 1, 1], [5, 1, 1], [25, 5, 1]];
    minerals = minerals.map((v)=>{
        if(v === "diamond") return 0;
        if(v === "iron") return 1;
        if(v === "stone") return 2;
    })
    
    function dfs(index, life, current, sum) {
        if(index === minerals.length) {
            answer = Math.min(answer, sum);
            return;
        }
        
        if(life !== 0) {
            dfs(index+1, life-1, current, sum+tired[current][minerals[index]]);
            return;
        }
        
        if(picks.every((v)=>v===0)) {
            answer = Math.min(answer, sum);
            return;
        }
        
        for(let i of [0, 1, 2]) {
            if(picks[i] === 0) continue;
            picks[i]--;
            dfs(index, 5, i, sum);
            picks[i]++;
        }
    }
    
    dfs(0, 0, 0, 0);
    
    return answer;
}