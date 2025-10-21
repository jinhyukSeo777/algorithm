function solution(n, t, m, p) {
    var answer = '';
    let len = 0;
    
    let i = 0;
    while(answer.length < t) {
        const str = i.toString(n).toUpperCase();
        
        while(len+str.length >= p && answer.length < t) {
            answer+=str[p-len-1];
            p+=m;
        }
        
        len+=str.length;
        i++;
    }
    
    return answer;
}