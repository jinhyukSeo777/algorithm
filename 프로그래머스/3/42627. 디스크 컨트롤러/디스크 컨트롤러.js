function solution(jobs) {
    const len = jobs.length;
    let sum = 0; 
    let time = 0;
    let queue = [];
    jobs.sort((a,b)=>a[0]-b[0]);
    
    while(jobs.length > 0 || queue.length > 0) {
        while(jobs.length > 0 && time >= jobs[0][0]) queue.push(jobs.shift());
        queue.sort((a,b)=>a[1]-b[1]);
        
        if(queue.length === 0) {
            time = jobs[0][0];
        } else {
            const item = queue.shift();
            time+=item[1];
            sum+=time-item[0];
        }
    }
    
    return Math.floor(sum/len);
}