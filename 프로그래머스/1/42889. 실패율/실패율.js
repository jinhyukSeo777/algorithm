function solution(N, stages) {
    const map = new Map();
    stages.sort((a,b)=>a-b);
    
    for(let i = 1; i <= N; i++) {
        const first_index = stages.indexOf(i);
        const last_index = stages.lastIndexOf(i);
        
        const temp1 = last_index - first_index + 1;
        const temp2 = stages.length - first_index;
        
        const rate = first_index === -1 ? 0 : temp1 / temp2;

        map.set(i, rate);
    }
    
    return [...map].sort((a,b)=>b[1]-a[1]).map(v => v[0]);
}