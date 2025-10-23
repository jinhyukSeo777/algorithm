function solution(number, k) {
    const stack = [];
    
    for(let n of number) {
        while(k > 0 && stack.at(-1) < n) {
            stack.pop();
            k--;
        }
        stack.push(n);
    }
    
    return stack.slice(0, stack.length-k).join("");
}