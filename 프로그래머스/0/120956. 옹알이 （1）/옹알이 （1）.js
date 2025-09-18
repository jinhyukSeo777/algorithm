function solution(babbling) {
    var answer = 0;
    const word = ["aya", "ye", "woo", "ma"];
    const set = new Set();
    
    function go(str, count) {
        set.add(str);
        
        if(count === word.length) return;
        
        for(let w of word) {
            go(str+w, count+1);
        }
    }
    
    go("", 0);
    
    for(let b of babbling) {
        if(set.has(b)) answer++;
    }
    
    return answer;
}