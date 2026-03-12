function solution(signals) {
    signals = signals.map(v => {
        let str = "";
        str = str + "G".repeat(v[0]);
        str = str + "Y".repeat(v[1]);
        str = str + "R".repeat(v[2]);
        return str;
    })
    
    for(let t = 1; t <= Math.pow(20, 5); t++) {
        const status = signals.map(v => v[t % v.length - 1]);
        if(status.every(v => v === "Y")) return t;
    }
    
    return -1;
}