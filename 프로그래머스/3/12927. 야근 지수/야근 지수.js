function solution(n, works) {
    works.sort((a,b)=>a-b);
    works.unshift(0);
    let target = works.length-2;
    
    while(target >= 0 && n > 0) {
        while(works.at(-1) !== works[target] && n > 0) {
            for(let i = target+1; i < works.length; i++) {
                if(n === 0) break;
                works[i]--;
                n--;
            }
        }
        target--;
    }
    
    return works.reduce((acc,cur)=>acc+Math.pow(cur, 2), 0);
}