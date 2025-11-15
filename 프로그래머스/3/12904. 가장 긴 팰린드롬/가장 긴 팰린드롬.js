function solution(s) {
    var answer = 0;

    for(let i = 0; i < s.length; i++) {
        let l = i-1, r = i+1;
        let sum_odd = 1;
        while(s[l] && s[r] && s[l] === s[r]) {
            l--;
            r++;
            sum_odd+=2;
        }
        
        l = i, r = i+1;
        let sum_even = 0;
        while(s[l] && s[r] && s[l] === s[r]) {
            l--;
            r++;
            sum_even+=2;
        }
        
        answer = Math.max(answer, sum_odd, sum_even);
    }

    return answer;
}