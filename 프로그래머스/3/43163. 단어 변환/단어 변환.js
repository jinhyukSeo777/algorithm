function isNear(str, target) {
    const diff_count = str.split("").reduce((acc,_,idx)=>{
        if(str[idx] !== target[idx]) return acc+1;
        else return acc;
    },0);
    return diff_count === 1 ? true : false;
}

function solution(begin, target, words) {
    var answer = Infinity;
    let check  = new Array(words.length).fill(false);
    
    function dfs(str, count) {
        if(str === target) {
            answer = Math.min(answer, count);
            return;
        }
        for(let i = 0; i < words.length; i++) {
            if(!check[i] && isNear(str, words[i])) {
                check[i] = true;
                dfs(words[i], count+1);
                check[i] = false;
            }
        }
    }
    
    dfs(begin, 0);
    
    return answer !== Infinity ? answer : 0;
}