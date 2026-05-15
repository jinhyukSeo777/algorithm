function isNear(str, target) {
    let count = 0;
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== target[i]) count++;
    }
    
    return count < 2 ? true : false;
}

function solution(begin, target, words) {
    var answer = Infinity;
    const set = new Set();
    
    function dfs(str, count) {
        if(str === target) {
            answer = Math.min(answer, count);
            return;
        }
        
        for(let word of words) {
            if(set.has(word) || !isNear(str, word)) continue;
            
            set.add(word);
            dfs(word, count + 1);
            set.delete(word);
        }
    }
    
    dfs(begin, 0);
    
    return answer !== Infinity ? answer : 0;
}