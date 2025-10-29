function getList(str, len) {
    str = str.split("").sort().join("");
    const result = [];
    let current = "";
    
    function dfs(index) {
        if(current.length === len) {
            result.push(current);
            return;
        }
        
        for(let i = index; i < str.length; i++) {
            current+=str[i];
            dfs(i+1);
            current = current.slice(0, current.length-1);
        }
    }
    
    dfs(0);
    return result;
}

function solution(orders, course) {
    var answer = [];
    const map = new Map();
    
    for(let order of orders) {
        for(let len of course) {
            const list = getList(order, len);
            for(let l of list) map.set(l, (map.get(l) || 0)+1);
        }
    }
    
    for(let len of course) {
        const temp = [...map].filter((v)=>v[0].length === len && v[1] > 1);
        const max = Math.max(...temp.map((v)=>v[1]));
        const arr = temp.filter((v)=>v[1] === max).map((v)=>v[0]);
        answer = answer.concat(arr);
    }
    
    return answer.sort();
}