function isCorrect(arr) {
    const newArr = [...arr];
    const item = newArr.shift();
    const stack = [item];
    
    while(newArr.length > 0) {
        const item = newArr.shift();
        if(stack.at(-1) === "(" && item === ")") stack.pop();
        else stack.push(item);
    }
    
    return stack.length === 0 ? true : false;
}

function go(v) {
    if(v.length === 0) return [];
    
    const item = v.shift();
    const u = [item];
    const stack = [item];
    
    while(stack.length > 0) {
        const item = v.shift();
        u.push(item);
        
        if(item === stack.at(-1)) stack.push(item);
        else stack.pop();
    }
    
    if(isCorrect(u)) return [...u, ...go(v)];
    
    const temp1 = ["(", ...go(v), ")"];
    const temp2 = u.slice(1, -1).map((v) => v === "(" ? ")" : "(");
    
    return [...temp1, ...temp2];
}

function solution(p) {
    return go(p.split("")).join("");
}