function toSec(str) {
    const [hour, min, sec] = str.split(":").map((v)=>Number(v));
    return hour*60*60 + min*60 + sec;
}

function toHHMMSS(time) {
    const hour = Math.floor(time/3600);
    const min = Math.floor(time%3600/60);
    const sec = Math.floor(time%60);
    const pad = (n) => n < 10 ? "0" + n : "" + n;
    return `${pad(hour)}:${pad(min)}:${pad(sec)}`;
}

function solution(play_time, adv_time, logs) {
    let answer = 0;
    let views = 0;
    const arr = new Array(100*60*60).fill(0);
    
    for(let str of logs) {
        const [startStr, endStr] = str.split("-");
        const startSec = toSec(startStr);
        const endSec = toSec(endStr);
        arr[startSec] += 1;
        arr[endSec] -= 1;
    }
    
    for(let i = 1; i < arr.length; i++) {
        arr[i] += arr[i-1];
    }
    
    for(let i = 1; i < arr.length; i++) {
        arr[i] += arr[i-1];
    }
    
    const lineLen = toSec(play_time);
    const adLen = toSec(adv_time);
    
    answer = 0;
    views = arr[adLen-1] - arr[0];
    
    for(let i = 1; i <= lineLen-adLen; i++) {
        if(arr[i+adLen-1] - arr[i-1] > views) {
            answer = i;
            views = arr[i+adLen-1] - arr[i-1];
        }
    }
    
    return toHHMMSS(answer);
}