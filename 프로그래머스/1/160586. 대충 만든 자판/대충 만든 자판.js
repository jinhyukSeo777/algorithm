function solution(keymap, targets) {
    var answer = [];
    const map = new Map();
    
    for(let str of keymap) {
        for(let i = 0; i < str.length; i++) {
            const char = str[i];
            if(!map.has(char) || map.get(char) > i + 1) map.set(char, i+1);
        }
    }
    
    for(let target of targets) {
        let sum = 0;
        
        for(let char of target) {
            if(!map.has(char)) {
                sum = -1;
                break;
            }
            sum+=map.get(char);
        }
        
        answer.push(sum);
    }
    
    return answer;
}