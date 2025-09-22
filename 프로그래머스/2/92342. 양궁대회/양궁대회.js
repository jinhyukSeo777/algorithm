function getScore(info, arr) {
    let score = 0;
    
    for(let i = 0; i < 11; i++) { 
        if(info[i] === 0 && arr[i] === 0) continue;
        if(info[i] < arr[i]) score+=(10-i);    
        if(info[i] >= arr[i]) score-=(10-i);   
    }
    
    return score;
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
    let max = 0;
    
    function dfs(arr, i, arrow) {
        if(arrow > n) return;
        
        if(arrow === n) {
            const score = getScore(info, arr);
            if(score === 0) return;
            if(score > max || (score === max && isCorrectOrder(answer, arr))) {
                max = score;
                answer = [...arr];
            }
            return;
        }
        
        if(i === 11) {
            arr[10]+=(n-arrow);
            const score = getScore(info, arr);
            if(score === 0) return;
            if(score > max || (score === max && isCorrectOrder(answer, arr))) {
                max = score;
                answer = [...arr];
            }
            arr[10]-=(n-arrow);
            return;
        }
        
        const apeachScore = info[i];
        
        dfs(arr, i+1, arrow);
        
        arr[i] = apeachScore+1;
        dfs(arr, i+1, arrow+apeachScore+1);
        arr[i] = 0;
    }
    
    dfs(new Array(11).fill(0), 0, 0);
    
    return answer.length === 0 ? [-1] : answer;
}