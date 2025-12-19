function getDiff(info, arr) {
    let diff = 0;
    
    for(let i = 0; i < 11; i++) { 
        if(info[i] === 0 && arr[i] === 0) continue;
        if(info[i] < arr[i]) diff+=(10-i);    
        if(info[i] >= arr[i]) diff-=(10-i);   
    }
    
    return diff;
}

function isCorrectOrder(answer, arr) {
    if(answer.length === 0) return true;
    
    for(let i = 10; i >= 0; i--) {
        if(answer[i] < arr[i]) return true;
        if(answer[i] > arr[i]) return false;
    }
}

function solution(n, info) {
    var answer = [];
    const arr = new Array(11).fill(0);
    let max = 1;
    
    function dfs(i, arrow) {
        if(arrow < 0) return;
        
        if(arrow === 0) {
            const score = getDiff(info, arr);
            if(score > max || (score === max && isCorrectOrder(answer, arr))) {
                max = score;
                answer = [...arr];
            }
            return;
        }
        
        if(i === 11) {
            arr[10]+=arrow;
            const score = getDiff(info, arr);
            if(score > max || (score === max && isCorrectOrder(answer, arr))) {
                max = score;
                answer = [...arr];
            }
            arr[10]-=arrow;
            return;
        }
        
        // 1.
        dfs(i+1, arrow);
        
        // 2.
        arr[i] = info[i] + 1;
        dfs(i+1, arrow - info[i] - 1);
        arr[i] = 0;
    }
    
    dfs(0, n);
    
    return answer.length === 0 ? [-1] : answer;
}