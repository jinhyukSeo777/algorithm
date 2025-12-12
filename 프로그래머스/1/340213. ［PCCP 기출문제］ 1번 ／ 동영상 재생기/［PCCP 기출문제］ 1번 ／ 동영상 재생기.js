function getSec(str) {
    const [min, sec] = str.split(":").map(Number);
    return min * 60 + sec;
}

function toMMSS(num) {
    const min = String(Math.floor(num / 60));
    const sec = String(num % 60);
    return `${min.padStart(2, "0")}:${sec.padStart(2, "0")}`;
}
 
function solution(video_len, pos, op_start, op_end, commands) {
    video_len = getSec(video_len);
    pos = getSec(pos);
    op_start = getSec(op_start);
    op_end = getSec(op_end);
    
    for(let command of commands) {
        if(op_start <= pos && pos <= op_end) pos = op_end;
        if(command === "prev") pos = Math.max(0, pos-10);
        if(command === "next") pos = Math.min(video_len, pos+10);
    }
    if(op_start <= pos && pos <= op_end) pos = op_end;
    
    return toMMSS(pos);
}