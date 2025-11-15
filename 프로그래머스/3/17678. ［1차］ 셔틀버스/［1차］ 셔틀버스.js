function getMin(str) {
    const [hour, min] = str.split(":").map(Number);
    return hour * 60 + min;
}

function toString(time) {
    const hour = Math.floor(time / 60);
    const min = time % 60;
    return `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
}

function solution(n, t, m, timetable) {
    timetable = timetable.sort();  
    let time = getMin("09:00");
    
    while(n > 1) {
        let count = 0;
        
        while(count < m && getMin(timetable[0]) <= time) {
            count++;
            timetable.shift();
        }
        
        time+=t;
        n--;
    }
    
    if(timetable.length >= m) return toString(Math.min(time, getMin(timetable[m-1])-1));
    return toString(time);
}