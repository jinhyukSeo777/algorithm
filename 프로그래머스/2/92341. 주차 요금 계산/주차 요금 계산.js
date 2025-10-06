function getMin(str) {
    const [hour, min] = str.split(":").map(Number);
    return hour * 60 + min;
}

function solution(fees, records) {
    var answer = [];
    const map = new Map();
    const start = new Map();
    
    for(let record of records) {
        const [time, number, type] = record.split(" ");
        const current = getMin(time);
        
        if(type === "IN") {
            start.set(number, current);
        }
        
        if(type === "OUT") {
            const prev = start.get(number);
            start.delete(number);
            map.set(number, (map.get(number) || 0) + current - prev);
        }
    }
    
    for(let [number, time] of start) {
        map.set(number, (map.get(number) || 0) + getMin("23:59") - time);
    }
    
    const arr = [...map].sort((a,b)=>a[0]-b[0]);
    return arr.map(([_, time])=>time <= fees[0] ? fees[1] : fees[1] + Math.ceil((time - fees[0])/fees[2]) * fees[3]);
}