function solution(elements) {
    const arr = elements.concat(elements);
    const set = new Set();
    
    for(let n = 0; n < elements.length; n++) {
        let sum = 0;
        for(let i = 0; i < elements.length; i++) {
            sum += arr[n+i];
            set.add(sum);
        }
    }
    
    return set.size;
}