function solution(clothes) {
    var answer = 1;
    const map = new Map();
    
    for(let [content, variable] of clothes) {
        map.set(variable, (map.get(variable) || 0)+1);
    }

    for(let [key, value] of map) answer*=(value+1);
    
    return answer-1;
}