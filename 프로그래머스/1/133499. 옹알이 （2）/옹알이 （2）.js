function solution(babbling) {
    var answer = 0;
    
    for(let str of babbling) {
        str = str.replaceAll("aya","1")
            .replaceAll("ye","2")
            .replaceAll("woo","3")
            .replaceAll("ma","4")
        
        if(/^[0-9]+$/.test(str) === false) continue;
        if([...str].some((_,i)=>str[i]===str[i+1])) continue;
        
        answer++;
    }
    
    return answer;
}