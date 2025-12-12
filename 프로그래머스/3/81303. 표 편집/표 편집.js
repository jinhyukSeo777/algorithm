function solution(n, k, cmd) {
    const arr = [];
    const deleted = [];
    let current = k;
    
    for(let i = 0; i < n; i++) {
        arr[i] = [true, i-1, i+1];
        if(i === 0) arr[i][1] = null;
        if(i === n-1) arr[i][2] = null;
    }
    
    for(let str of cmd) {
        const [dir, value] = str.split(" ");
        
        if(dir === "D") {
            let jump = 0;
            while(jump < value) {
                if(arr[current][2] === null) {
                    break;
                }
                current = arr[current][2];
                jump++;
            }
        }
        
        if(dir === "U") {
            let jump = 0;
            while(jump < value) {
                if(arr[current][1] === null) {
                    break;
                }
                current = arr[current][1];
                jump++;
            }
        }
        
        if(dir === "C") {
            arr[current][0] = false;
            if(arr[current][1] != null) arr[arr[current][1]][2] = arr[current][2];
            if(arr[current][2] != null) arr[arr[current][2]][1] = arr[current][1];
            deleted.push([current, arr[current][1], arr[current][2]]);
            
            if(arr[current][2] != null) current = arr[current][2];
            else current = arr[current][1];
        }
        
        if(dir === "Z") {
            const rollback = deleted.pop();
            arr[rollback[0]][0] = true;
            if(rollback[1] !== null) arr[rollback[1]][2] = rollback[0];
            if(rollback[2] !== null) arr[rollback[2]][1] = rollback[0];
        }
    }
    
    return arr.map((v)=>v[0] === true ? "O" : "X").join("");
}