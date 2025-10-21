function check(map, want, number) {
    for(let i = 0; i < want.length; i++) {
        if(map.has(want[i]) && map.get(want[i]) < number[i]) return false;
    }
    return true;
}

function solution(want, number, discount) {
    var answer = 0;
    const map = new Map();
    
    for(let w of want) map.set(w, 0);
    
    for(let i = 0; i < 10; i++) {
        if(map.has(discount[i])) map.set(discount[i], map.get(discount[i])+1);
    }
    
    if(check(map, want, number)) answer++;
    
    for(let i = 10; i < discount.length; i++) {
        if(map.has(discount[i-10])) map.set(discount[i-10], map.get(discount[i-10])-1);
        if(map.has(discount[i])) map.set(discount[i], map.get(discount[i])+1);
        if(check(map, want, number)) answer++;
    }
    
    return answer;
}