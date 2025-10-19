function solution(routes) {
    var answer = 0;
    routes = routes.sort((a,b)=>a[0]-b[0]);
    let current_end = Infinity;
    
    for(let [start, end] of routes) {
        if(start <= current_end) {
            if(end < current_end) current_end = end;
            continue;
        }
        answer++;
        current_end = end;
    }
    
    return answer+1;
}