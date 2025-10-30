function getDay(str) {
    const [year, month, day] = str.split(".").map(Number);
    return (year - 1) * 12 * 28 + (month - 1) * 28 + day;
}

function solution(today, terms, privacies) {
    var answer = [];
    const map = new Map();
    today = getDay(today);
    
    for(let str of terms) {
        const [type, month] = str.split(" ");
        map.set(type, Number(month) * 28);
    } 
    
    for(let i = 0; i < privacies.length; i++) {
        const [date, type] = privacies[i].split(" ");
        const temp = getDay(date);
        if(today - temp >= map.get(type)) answer.push(i+1);
    }
    
    return answer;
}