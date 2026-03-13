function solution(cost, hint) {
    let answer = Infinity;
    let arr = new Array(cost.length).fill(0);
    
    function dfs(round, sum) {
        if(round === cost.length) {
            answer = Math.min(answer, sum);
            return;
        }
        
        const ticket = Math.min(arr[round], cost[round].length-1);
        const price = cost[round][ticket];
        
        dfs(round+1, sum+price);
        
        if(round === cost.length-1) return;
        
        const temp = [...arr];
        
        for(let i = 1; i < hint[round].length; i++) {
            const t = hint[round][i];
            arr[t-1]++;
        }
        
        dfs(round+1, sum+price+hint[round][0]);
        
        arr = [...temp];
    }
    
    dfs(0, 0);
    
    return answer;
}