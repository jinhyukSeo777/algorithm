function getSequence(n) {
    const result = [];
    
    function dfs(arr) {
        if(arr.length === n) {
            result.push([...arr]);
            return;
        }
        
        for(let i of [10, 20, 30, 40]) {
            arr.push(i);
            dfs(arr);
            arr.pop();
        }
    }
    
    dfs([]);
    
    return result;
}

function solution(users, emoticons) {
    var answer = [0, 0];
    const sequence = getSequence(emoticons.length);
    
    for (let seq of sequence) {
        const temp = [0, 0];

        for(let i = 0; i < users.length; i++) {
            let sum = 0;
            for(let j = 0; j < emoticons.length; j++) {
                if(users[i][0] <= seq[j]) sum+=emoticons[j]*(1-seq[j]/100);
            }
            if(sum >= users[i][1]) temp[0]++;
            else temp[1]+=sum;
        }
            
        if(temp[0] > answer[0]) answer = temp;
        if(temp[0] === answer[0] && temp[1] > answer[1]) answer = temp;
    }
    
    return answer;
}