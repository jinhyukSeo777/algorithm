function solution(enroll, referral, seller, amount) {
    const map = new Map();
    const sum = new Map();
    
    for(let i = 0; i < enroll.length; i++) map.set(enroll[i], referral[i]);
    
    for(let i = 0; i < seller.length; i++) {
        let current = seller[i];
        let money = amount[i]*100;
        
        while(money !== 0 && current !== "-") {
            const yours = Math.floor(money/10);
            const mine = money-yours;
            const next = map.get(current);
            
            sum.set(current, (sum.get(current) || 0)+mine);
            
            current = next;
            money = yours;
        }
    }
    
    return enroll.map((v)=>sum.get(v) || 0);
}