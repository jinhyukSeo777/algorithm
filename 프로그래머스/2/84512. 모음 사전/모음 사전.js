function solution(word) {
    var answer = 0;
    var count = 0;
    const alphabet = ["A","E","I","O","U"];
    
    function dfs(str, len) {
        if(answer) return;
        
        if(str === word) answer = count;
        
        if(len === 5) return;
        
        for(let i = 0; i < 5; i++) {
            count++;
            dfs(str + alphabet[i], len+1);
        }
    }
    
    dfs("", 0);
    
    return answer;
}