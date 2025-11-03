function go(seq, index, str) {
    if(index === 3) return Number(str);
    
    const math = seq[index];
    const arr = str.split(math);
    
    let sum = go(seq, index+1, arr[0]);
    for(let i = 1; i < arr.length; i++) {
        if(math === "*") sum*=go(seq, index+1, arr[i]);
        if(math === "+") sum+=go(seq, index+1, arr[i]);
        if(math === "-") sum-=go(seq, index+1, arr[i]);
    }
    
    return sum;
}

function solution(expression) {
    const seq = [["*", "+", "-"],
                ["*", "-", "+"],
                ["+", "*", "-"],
                ["+", "-", "*"],
                ["-", "*", "+"],
                ["-", "+", "*"]]
    
    return Math.max(...seq.map((v)=>Math.abs(go(v, 0, expression))));
}