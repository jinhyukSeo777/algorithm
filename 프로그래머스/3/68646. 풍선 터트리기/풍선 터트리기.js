function solution(a) {
    var answer = 0;
    const min_left = [];
    const min_right = [];
    
    min_left[0] = 2000000000;
    for(let i = 1; i < a.length; i++) {
        min_left[i] = Math.min(min_left[i-1], a[i-1]);
    }
    
    min_right[a.length-1] = 2000000000;
    for(let i = a.length-2; i >= 0; i--) {
        min_right[i] = Math.min(min_right[i+1], a[i+1]);
    }
    
    for(let i = 0; i < a.length; i++) {
        if(a[i] > min_left[i] && a[i] > min_right[i]) continue;
        answer++;
    }
    
    return answer;
}