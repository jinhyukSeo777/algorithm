function getCost(current, target) {
    if(current === "stone" && target === "stone") return 1;
    if(current === "stone" && target === "iron") return 5;
    if(current === "stone" && target === "diamond") return 25;
    
    if(current === "iron" && target === "stone") return 1;
    if(current === "iron" && target === "iron") return 1;
    if(current === "iron" && target === "diamond") return 5;
    
    if(current === "diamond" && target === "stone") return 1;
    if(current === "diamond" && target === "iron") return 1;
    if(current === "diamond" && target === "diamond") return 1;
}

function solution(picks, minerals) {
    var answer = Infinity;
    const mineral = ["diamond", "iron", "stone"];
    
    function dfs(index, life, current, sum) {
        if(index === minerals.length) {
            answer = Math.min(answer, sum);
            return;
        }
        
        if(life !== 0) {
            dfs(index+1, life-1, current, sum + getCost(current, minerals[index]));
            return;
        }
        
        if(picks.every(v => v===0)) {
            answer = Math.min(answer, sum);
            return;
        }
        
        for(let i = 0; i <= 2; i++) {
            if(picks[i] === 0) continue;
            
            picks[i]--;
            dfs(index, 5, mineral[i], sum);
            picks[i]++;
        }
    }
    
    dfs(0, 0, "", 0);
    
    return answer;
}