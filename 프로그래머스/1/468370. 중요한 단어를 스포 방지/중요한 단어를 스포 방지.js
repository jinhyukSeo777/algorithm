function getClosed(message, spoiler_ranges) {
    for(let [start, end] of spoiler_ranges) {
        for(let i = start; i <= end; i++) {
            if(message[i] === " ") continue;
            message = message.slice(0, i) + "㉾" + message.slice(i+1);
        }
    }
    
    return message.split(" ");
}

function solution(message, spoiler_ranges) {
    var answer = 0;
    const set = new Set(getClosed(message, spoiler_ranges));
    
    for(let word of message.split(" ")) {
        if(!set.has(word)) answer++;
        set.add(word);
    }
    
    return answer;
}