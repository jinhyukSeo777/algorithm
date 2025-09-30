function solution(order) {
    var answer = 0;
    let index = 0;
    let n = 0;
    const stack = [];
    
    while(index < order.length) {
        if(n === order[index]) {
            answer++;
            index++;
            n++;
            continue;
        }
        
        if(n < order[index]) {
            stack.push(n);
            n++;
            continue;
        }
        
        const front = stack.pop();
        if(front === order[index]) {
            answer++;
            index++;
            continue;
        }
        
        break;
    }
     
    return answer;
}