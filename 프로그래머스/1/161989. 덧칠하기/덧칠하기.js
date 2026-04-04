function solution(n, m, section) {
    var answer = 0;
    let location = 0;
    
    for(let s of section) {
        if(s > location) {
            answer++;
            location = s + m - 1;
        }
    }
    
    return answer;
}