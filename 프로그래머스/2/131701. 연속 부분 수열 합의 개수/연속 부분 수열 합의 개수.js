function solution(elements) {
    const arr = elements.concat(elements);
    const set = new Set();
    
    for(let i = 0; i < elements.length; i++) {
        let sum = 0;
        for(let n = 0; n < elements.length; n++) {
            sum += arr[i+n];
            set.add(sum);
        }
    }
    
    return set.size;
}