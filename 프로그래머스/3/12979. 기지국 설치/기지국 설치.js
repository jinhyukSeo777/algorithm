function getCount(n, w) {
    const mok = Math.floor(n/(1+w*2));
    const na = n%(1+w*2);
    if(na === 0) return mok;
    else return mok+1;
}

function solution(n, stations, w) {
    var answer = 0;
    const gray = [];
    
    answer+=getCount(stations[0]-w-1, w);
    for(let i = 0; i < stations.length-1; i++) {
        answer+=getCount((stations[i+1]-w)-(stations[i]+w)-1, w);
    }
    if(n-stations.at(-1)-w > 0) answer+=getCount(n-stations.at(-1)-w, w);
    
    return answer;
}