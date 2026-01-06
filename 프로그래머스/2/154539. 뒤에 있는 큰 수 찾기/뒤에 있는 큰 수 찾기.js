function solution(numbers) {
    var answer = [];
    const stack = [];
    
    for(let i = 0; i < numbers.length; i++) {
        const n = numbers[i];
        
        while(stack.length > 0 && numbers[stack.at(-1)] < n) {
            answer[stack.pop()] = n;
        }
        
        stack.push(i);
    }
    
    while(stack.length > 0) {
        answer[stack.pop()] = -1;
    }
    
    return answer;
}