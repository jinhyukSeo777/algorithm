function solution(n, m, x, y, r, c, k) {
    var answer = '';
    const d = [[1, 0, "d"], [0, -1, "l"], [0, 1, "r"], [-1, 0, "u"]];
    const distance = Math.abs(x-r) + Math.abs(y-c);
    if(distance > k || distance % 2 !== k % 2) return "impossible";
    
    function dfs(y, x, count, str) {
        if(answer !== "") return;
        
        if(count === k) {
            if(y === r && x === c) answer = str;
            return;
        }
        
        if(Math.abs(y-r) + Math.abs(x-c) > k-count) return;
        
        for(let [dy, dx, ds] of d) {
            const ny = y+dy, nx = x+dx;
            if(ny > 0 && ny <= n && nx > 0 && nx <= m) {
                dfs(ny, nx, count+1, str+ds);
            }
        }
    }
    
    dfs(x, y, 0, "");
    
    return answer;
}