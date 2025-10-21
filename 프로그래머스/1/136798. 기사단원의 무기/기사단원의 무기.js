const getDivisors = (num) => {
    let count = 0;
    
    for(let i = 1 ; i <= Math.sqrt(num) ; i++) {
        if(num % i === 0) {
            if(i === Math.sqrt(num)) count+=1;
            else count+=2;
        }
    }
    
    return count;
}

function solution(number, limit, power) {
    var answer = 0;
    
    for(var i = 1; i <= number; i++) {
        const num = getDivisors(i)
        if(num > limit) answer+=power;
        else answer+=num;
    }
    
    return answer;
}