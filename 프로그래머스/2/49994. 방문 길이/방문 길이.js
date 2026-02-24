function solution(dirs) {
    const set = new Set();
    let current = [0, 0];
    
    for(let char of dirs) {
        const next = [current[0], current[1]];
        
        if(char === "U" && current[1] < 5) next[1]+=1;
        if(char === "D" && current[1] > -5) next[1]-=1;
        if(char === "L" && current[0] > -5) next[0]-=1;
        if(char === "R" && current[0] < 5) next[0]+=1;
        
        if(current[0] !== next[0] || current[1] !== next[1]) {
            const x = (current[0] + next[0]) / 2;
            const y = (current[1] + next[1]) / 2;
            set.add(x + "|" + y);
            current = next;
        }
    }
    
    return set.size;
}