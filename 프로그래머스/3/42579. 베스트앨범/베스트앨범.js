function solution(genres, plays) {
    var answer = [];
    let map = new Map();
    let seq = new Map();
    
    genres.forEach((v,i)=>{
        if(!map.has(v)) map.set(v, 0);
        map.set(v, map.get(v)+plays[i]);
        
        if(!seq.has(v)) seq.set(v, []);
        seq.set(v, [...seq.get(v), [i, plays[i]]]);
    })
        
    Array.from(map.entries()).sort((a,b)=>b[1]-a[1]).forEach(([key, _])=>{
        const arr = seq.get(key).sort((a,b)=>b[1]-a[1]).map((key, _)=>key[0]).slice(0,2);
        answer = [...answer, ...arr];
    })
    
    return answer;
}