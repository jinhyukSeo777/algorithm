function solution(queue1, queue2) {
    var answer = 0;
    const arr = queue1.concat(queue2);
    let queue1_sum = queue1.reduce((acc,cur)=>acc+cur, 0);
    let queue2_sum = queue2.reduce((acc,cur)=>acc+cur, 0);
    let queue1_index = 0;
    let queue2_index = queue1.length;
    
    while(answer <= arr.length * 2) {
        if(queue1_sum === queue2_sum) break;
        if(queue1_sum > queue2_sum) {
            queue1_sum-=arr[queue1_index];
            queue2_sum+=arr[queue1_index];
            queue1_index = (queue1_index+1)%arr.length;
        } else {
            queue2_sum-=arr[queue2_index];
            queue1_sum+=arr[queue2_index];
            queue2_index = (queue2_index+1)%arr.length;
        }
        answer++;
    }
    
    return answer <= arr.length * 2 ? answer : -1;
}