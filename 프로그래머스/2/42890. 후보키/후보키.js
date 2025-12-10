function generateCombinations(n) {
    const result = [];
    const arr = []

    function dfs(start) {
        result.push([...arr]);
        
        if(arr.length === n) return;

        for(let i = start; i < n; i++) {
            arr.push(i);
            dfs(i+1);
            arr.pop(); 
        }
    }

    dfs(0);
    
    return result.sort((a, b) => a.length - b.length);
}

function solution(relation) {
    var answer = 0;
    const combination = generateCombinations(relation[0].length);
    const key = [];
    
    for(let comb of combination) {
        const set = new Set();
        let success = true;
        
        for(let ch of key) {
            if(ch.every((v)=>comb.includes(v))) success = false;
        }
        
        for(let rel of relation) {
            const str = comb.reduce((acc,cur)=>acc+=rel[cur], "");
            if(set.has(str)) success = false;
            else set.add(str);
        }
        
        if(success) {
            answer++;
            key.push(comb);
        }
    }
    
    return answer;
}