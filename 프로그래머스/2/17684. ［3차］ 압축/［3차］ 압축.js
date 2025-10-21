function solution(msg) {
    var answer = [];
    const map = new Map();
    
    for(let i = 0; i <= 25; i++) {
        map.set(String.fromCharCode(65+i), i+1);
    }
    
    let index = 0;
    while(index < msg.length) {
        let str = msg[index++];
        
        while(map.has(str+msg[index])) {
            str+=msg[index++];
        }
        
        answer.push(map.get(str));
        map.set(str+msg[index], map.size+1);
    }
    
    return answer;
}