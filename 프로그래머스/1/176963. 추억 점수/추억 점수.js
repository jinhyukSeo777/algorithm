function solution(name, yearning, photo) {
    var answer = [];
    const map = new Map();
    
    for(let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i]);
    }
    
    for(let arr of photo) {
        const score = arr.reduce((acc, cur) => acc + (map.get(cur) || 0), 0);
        answer.push(score);
    }
    
    return answer;
}