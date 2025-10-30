function replaceMelody(melody) {
    return melody
        .replaceAll("C#", "c")
        .replaceAll("D#", "d")
        .replaceAll("F#", "f")
        .replaceAll("G#", "g")
        .replaceAll("A#", "a")
        .replaceAll("B#", "b");
}

function getDiff(startTime, endTime) {
    const [startHour, startMin] = startTime.split(":").map(Number);
    const [endHour, endMin] = endTime.split(":").map(Number);
    return endHour * 60 + endMin - startHour * 60 - startMin;
}

function solution(m, musicinfos) {
    var answer = "(None)";
    let max = 0;
    m = replaceMelody(m);
    
    for(let musicinfo of musicinfos) {
        let [startTime, endTime, title, melody] = musicinfo.split(",");
        const playTime = getDiff(startTime, endTime);
        melody = replaceMelody(melody);
        
        const mok = Math.floor(playTime / melody.length);
        const na = playTime % melody.length;
        melody = melody.repeat(mok) + melody.slice(0, na);
        
        if(melody.includes(m) && playTime > max) {
            answer = title;
            max = playTime;
        }
    }
    
    return answer;
}