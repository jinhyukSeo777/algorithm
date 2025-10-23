function solution(X, Y) {
    var answer = "";
    
    var countX = new Array(10).fill(0);
    var countY = new Array(10).fill(0);
    
    for(var i of X) {
        countX[+i]++;
    }
     for(var i of Y) {
        countY[+i]++;
    }
    
    for(var i = 9; i >= 0; i--) {
        const min = countX[i] >= countY[i] ? countY[i] : countX[i];
        if(min === 0) continue;
        for(var j = 1; j <= min; j++) {
            answer+=i;
        }
    }
    
    if(answer === "") return "-1";
    if(+answer === 0) return "0";
    return answer;
}