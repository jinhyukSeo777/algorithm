function solution(s) {
    var answer = 1000;
    
    for(let n = 1; n <= s.length; n++) {
        let str = "";
        let prev = "";
        let count = 1;
        
        for(let i = 0; i < s.length; i+=n) {
            if(s.slice(i, i+n) === prev) {
                count++;
                continue;
            }
            str = str + (count === 1 ? "" : count) + prev;
            prev = s.slice(i, i+n);
            count = 1;
        }
        str = str + (count === 1 ? "" : count) + prev;
        
        if(str.length < answer) answer = str.length;
    }
    
    return answer;
}