function rotateKey(key) {
    const rotate0 = key;
    const rotate90 = key.map((_,i)=>key.map((v)=>v[i]).reverse());
    const rotate180 = key.map((v)=>[...v].reverse()).reverse();
    const rotate270 = key.map((_,i)=>key.map((v)=>v[key.length-1-i]));
    
    return [rotate0, rotate90, rotate180, rotate270];
}

function expandArr(r, i, j, N, M) {
    const arr = new Array(N + 2 * M).fill(null).map((v)=>new Array(N + 2 * M).fill(0));
    
    for(let ii = 0; ii < M; ii++) {
        for(let jj = 0; jj < M; jj++) {
            if(r[ii][jj] === 1) arr[ii+i][jj+j] = 1;
        }
    }
    
    return arr;
}

function solution(key, lock) {
    const M = key.length;
    const N = lock.length;
    const arr = new Array(N + 2 * M).fill(null).map((v)=>new Array(N + 2 * M).fill(0));
    
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            if(lock[i][j] === 1) arr[i+M][j+M] = 1; 
        }
    }
    
    const rotated = rotateKey(key);
    
    for(let r of rotated) {
        for(let i = 0; i < N + M; i++) {
            for(let j = 0; j < N + M; j++) {
                const temp = expandArr(r, i, j, N, M);
                let success = true;
                
                for(let ii = M; ii < M + N; ii++) {
                    for(let jj = M; jj < M + N; jj++) {
                        if(temp[ii][jj] === arr[ii][jj]) success = false;
                    }
                }
                
                if(success) return true;
            }
        }
    }
    
    return false;
}