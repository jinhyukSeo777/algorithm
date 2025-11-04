function solution(data, col, row_begin, row_end) {
    var answer = [];
    
    data.sort((a,b)=>{
        if(a[col-1] !== b[col-1]) return a[col-1]-b[col-1];
        else return b[0]-a[0];
    });
    
    for(let i = row_begin; i <= row_end; i++) {
        const tuple = data[i-1];
        const sum = tuple.reduce((acc,cur)=>acc+cur%i, 0);
        answer.push(sum);
    }
    
    return answer.reduce((acc,cur)=>acc^cur, 0);
}