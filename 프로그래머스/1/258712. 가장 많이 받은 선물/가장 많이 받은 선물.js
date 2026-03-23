function solution(friends, gifts) {
    const map = new Map();
    const total = new Map();
    
    for(let gift of gifts) {
        const [from, to] = gift.split(" ");
        const key = from + "|" + to;
        
        map.set(key, (map.get(key) || 0) + 1);
        total.set(from, (total.get(from) || 0) + 1);
        total.set(to, (total.get(to) || 0) - 1);
    }
    
    const recive = new Map();
    
    for(let i = 0; i < friends.length-1; i++) {
        for(let j = i+1; j < friends.length; j++) {
            const A = friends[i];
            const B = friends[j];
            
            const AToB = map.get(A+"|"+B) || 0;
            const BToA = map.get(B+"|"+A) || 0;
            
            if(AToB > BToA) {
                recive.set(A, (recive.get(A) || 0) + 1);
                continue;
            }
            if(AToB < BToA) {
                recive.set(B, (recive.get(B) || 0) + 1);
                continue;
            }
            
            const ATotal = total.get(A) || 0;
            const BTotal = total.get(B) || 0;
            
            if(ATotal > BTotal) {
                recive.set(A, (recive.get(A) || 0) + 1);
                continue;
            }
            if(ATotal < BTotal) {
                recive.set(B, (recive.get(B) || 0) + 1);
                continue;
            }
        }
    }
    
    return Math.max(...[...recive].map(v => v[1]), 0);
}