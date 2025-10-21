function solution(a, b) {
    let n = 4;
    const month = [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  
    for(let i = 1; i <= 12; i++) {
        for(let j = 1; j <= month[i]; j++) {
            if(i === a && j === b) return week[n];
            n = (n+1)%7;
        }
    }
}