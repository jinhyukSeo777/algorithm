function solution(cards) {
    const set = new Set();
    const arr = [];
    
    function go(card) {
        let sum = 0;
        
        while(!set.has(card)) {
            set.add(card);
            sum++;
            card = cards[card-1];
        }
        
        return sum;
    }
    
    for(let card of cards) {
        if(set.has(card)) continue;
        arr.push(go(card));
    }
    
    arr.sort((a,b)=>b-a).slice(0, 2);
    
    return arr.length === 1 ? 0 : arr[0] * arr[1];
}