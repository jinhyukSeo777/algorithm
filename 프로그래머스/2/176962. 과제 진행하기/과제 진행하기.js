function getMin(str) {
    const [hour, min] = str.split(":").map(Number);
    return hour * 60 + min;
}

function solution(plans) {
    var answer = [];
    const stack = [];
    plans = plans.sort((a,b)=>getMin(a[1])-getMin(b[1]));
    
    while(plans.length > 0 || stack.length > 0) {
        if(plans.length === 0) {
            const item = stack.pop();
            answer.push(item[0]);
            continue;
        }
        
        if(plans.length === 1) {
            const item = plans.shift();
            answer.push(item[0]);
            continue;
        }
        
        let remain = getMin(plans[1][1]) - getMin(plans[0][1]) - Number(plans[0][2]);
        
        if(remain >= 0) {
            const item = plans.shift();
            answer.push(item[0]);
            
            while(remain > 0 && stack.length > 0) {
                const [name, time] = stack.at(-1);
                if(remain >= time) {
                    answer.push(name);
                    stack.pop();
                    remain-=time;
                } else {
                    stack.at(-1)[1]-=remain;
                    remain = 0;
                }
            }
        }
        
        if(remain < 0) {
            stack.push([plans[0][0], -remain]);
            plans.shift();
        }
    }
    
    return answer;
}