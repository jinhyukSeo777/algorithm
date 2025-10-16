function getBinaryNum(n) {  
    let len = 1;
    
    while(n.toString(2).length > len) {
        len = (len + 1) * 2 - 1;
    }

    let add_zero = len - n.toString(2).length;
    
    return "0".repeat(add_zero) + n.toString(2);
} 

function check(str) {
    if(str.length === 1) return true;
    
    const mid = Math.floor(str.length/2);
    
    if(str[mid] === "0") {
        if(str.slice(0, mid).includes("1") || str.slice(mid+1).includes("1")) return false;
    }
    
    return check(str.slice(0, mid)) && check(str.slice(mid+1));
}

function solution(numbers) {
    var answer = [];
    
    for(let number of numbers) {
        const binary = getBinaryNum(number);
        if(check(binary)) answer.push(1);
        else answer.push(0);
    }
    
    return answer;
}