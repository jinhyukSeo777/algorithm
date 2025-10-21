function solution(dartResult) {
    var answer = 0;
    dartResult = dartResult.split("");
    
    let prev = 0;
    while(dartResult.length > 0) {
        const number = dartResult[1] === "0" ? +dartResult.splice(0, 2).join("")  : +dartResult.shift();
        const type = dartResult.shift();
        const bonus = dartResult[0] === "*" || dartResult[0] === "#" ? dartResult.shift() : null;
        
        let temp = number;
        if(type === "D") temp = Math.pow(temp, 2);
        if(type === "T") temp = Math.pow(temp, 3);
        
        if(bonus === "#") {
            temp*=-1;
        }
        if(bonus === "*") {
            temp*=2;
            answer+=prev;
        }
        
        answer+=temp;
        prev=temp;
    }
    
    return answer;
}