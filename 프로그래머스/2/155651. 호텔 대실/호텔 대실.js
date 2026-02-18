function getMin(str) {
    const [hour, min] = str.split(":").map(Number);
    return hour * 60 + min;
}

function solution(book_time) {
    let answer = 0;
    let arr = [];
    book_time = book_time.map(v => [getMin(v[0]), getMin(v[1])]).sort((a,b)=>a[0]-b[0]);
    
    for(let [start, end] of book_time) {
        arr = arr.filter(v => v > start);
        arr.push(end+10);
        
        answer = Math.max(answer, arr.length);
    }
    
    return answer;
}