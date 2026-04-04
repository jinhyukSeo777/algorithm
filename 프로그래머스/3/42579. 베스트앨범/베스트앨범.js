function solution(genres, plays) {
    var answer = [];
    const map = new Map();
    const seq = new Map();
    
    for(let i = 0; i < genres.length; i++) {
        if(!map.has(genres[i])) map.set(genres[i], 0);
        map.set(genres[i], map.get(genres[i]) + plays[i]);
        
        if(!seq.has(genres[i])) seq.set(genres[i], []);
        seq.get(genres[i]).push([i, plays[i]]);
    }
    
    const orderedList = [...map].sort((a,b)=>b[1]-a[1]).map(v => v[0]);
    
    return orderedList.map(v => seq.get(v)).map(v => {
        v.sort((a,b)=>b[1]-a[1]);
        if(v.length >= 2) return [v[0][0], v[1][0]];
        return [v[0][0]];
    }).flat();
}