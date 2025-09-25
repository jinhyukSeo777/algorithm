function solution(cacheSize, cities) {
    var answer = 0;
    const map = new Map();
    
    if(cacheSize === 0) return cities.length * 5;
    
    for(let i = 0; i < cities.length; i++) {
        const city = cities[i].toUpperCase();
        
        if(map.has(city)) {
            map.set(city, i);
            answer+=1;
            continue;
        }
     
        if(map.size < cacheSize) {
            map.set(city, i);
            answer+=5;
            continue;
        }
        
        const arr = [...map].sort((a,b)=>a[1]-b[1]);
        const target = arr[0][0];
        
        map.delete(target);
        map.set(city, i);
        answer+=5;
    }
    
    return answer;
}