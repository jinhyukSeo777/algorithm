function getMin(str) {
    const [hour, min] = str.split(":");
    return +hour * 60 + +min;
}

function solution(book_time) {
    let answer = 0;
    let arr = [];
    book_time.sort((a,b)=>a[0].localeCompare(b[0]));
    
    for(let [start, end] of book_time) {
        const startMin = getMin(start);
        const endMin = getMin(end);
        
        arr = arr.filter((v)=>v > startMin);
        arr.push(endMin+10);
        
        answer = Math.max(answer, arr.length);
    }
    
    return answer;
}