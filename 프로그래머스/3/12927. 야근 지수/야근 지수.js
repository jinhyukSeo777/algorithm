function solution(n, works) {
    works.sort((a,b)=>a-b);
    works.unshift(0);
    let index = works.length-2;
    
    while(n > 0 && index >= 0) {
        const target = works[index];
        
        while(n > 0 && works[index+1] > works[index]) {
            for(let i = index+1; i < works.length; i++) {
                if(n === 0) break;
                works[i]--;
                n--;
            }
        }
        
        index--;
    }
    
    return works.reduce((acc,cur)=>acc+cur*cur, 0);
}