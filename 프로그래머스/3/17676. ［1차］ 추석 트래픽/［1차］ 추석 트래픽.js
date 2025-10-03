function toSec(str) {
    const time = str.split(" ")[1];
    const duration = str.split(" ")[2];
    
    const hour = time.split(":")[0];
    const min = time.split(":")[1];
    const sec = time.split(":")[2].split(".")[0];
    const msec = time.split(":")[2].split(".")[1];
    
    const endTime = +hour * 60 * 60 * 1000 + +min * 60 * 1000 + +sec * 1000 + +msec;
    const diff = +duration.split("s")[0] * 1000;
    const startTime = endTime - diff + 1;
    
    return [startTime, endTime];
}

function solution(lines) {
    var answer = 0;
    let arr = [];
    lines = lines.map((v)=>toSec(v)).sort((a,b)=>a[0]-b[0]);
    
    for(let line of lines) {
        const [startTime, endTime] = line;
        arr = arr.filter((v)=>v+1000 > startTime);
        arr.push(endTime);
        answer = Math.max(answer, arr.length);
    }
    
    return answer;
}